import React from 'react'
import {Box, Input, Text, Icon, Pressable, Button} from 'native-base'
import Colors from '../data/color';
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

var globalUsername = ''; // Global variable to store the username
var globalPass = ''; // Global variable to store the username

async function fetchUserCredentials(navigation) {
    try {
        const storedData = await AsyncStorage.getItem('user');
        const storedOnline = await AsyncStorage.getItem('isOnline');
        if (storedData) {
            const userData = JSON.parse(storedData);
            globalUsername = userData.uName; // Store the username in the global variable
            globalPass = userData.password; // Store the username in the global variable
            if (globalUsername && globalPass) {
                // Auto-login with the stored credentials
                if (storedOnline === "true") { // Check if user is not logged out
                    // Auto-login with the stored credentials
                    handleLogin(globalUsername, globalPass, navigation);
                }
            }
        }
    } catch (error) {
        console.log('Error retrieving user data:', error);
    }
}

const handleLogin = async (username, password, navigation) => {
    try {
      // Retrieve user data from AsyncStorage
        const storedData = await AsyncStorage.getItem('user');
        if (storedData) { // Parse the stored user data
            const userData = JSON.parse(storedData);
            // Check if the entered username and password match the stored user data
            if (username === userData.uName && password === userData.password) {
                // Login successful
                navigation.navigate('DrawerNav') 
                
            } else { // Invalid username or password
                alert('Invalid Username or Password');
                resetFields(); // Reset username and password fields
                
            }
        } else { // No user data found in AsyncStorage
            alert('No User Data Found');
            resetFields(); // Reset username and password fields
        }
    } catch (error) {
        console.log('Error retrieving user data:', error);
        alert('An error occurred');
    }
};

function LoginForm({navigation}) {
    const [show, setShow] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        fetchUserCredentials(navigation);
    }, [navigation]);

  // Reset username and password fields when leaving the page or navigating to registration
    React.useEffect(() => {
        const resetCredentials = () => {
            setUsername('');
            setPassword('');
        };
        const unsubscribeFocus = navigation.addListener('focus', resetCredentials);
        const unsubscribeBlur = navigation.addListener('blur', resetCredentials);
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
        };
    }, [navigation]);


    const resetFields = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <Box flex={1} 
            w="full" 
            h="150" 
            alignItems="flex-start" 
            justifyContent='flex-start' 
            gap="5"
            paddingLeft="3"
            paddingRight="3">
            <Text fontSize="2xl" fontWeight="500" color={Colors.main_dark}>Login</Text>
            <Text fontSize="md" fontWeight="700" color={Colors.main_dark}>Please input your credentials.</Text>
            <Text fontWeight="700" color={Colors.main_dark}>Username:</Text>
            <Input value={username} onChangeText={(text) => setUsername(text)} borderRadius="10" _focus={{bg: "white"}} variant="filled" size="md" placeholder="Enter your Username" shadow="5" />
            <Text fontWeight="600" color={Colors.main_dark}>Password:</Text>
            <Input value={password} onChangeText={(text) => setPassword(text)} shadow="5" _focus={{bg: "white"}} borderRadius="10" bg="white" variant="filled" size="md" type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="emerald.600" />
                    </Pressable>} placeholder="Password" />
            <Pressable w="full" alignItems="flex-end" _pressed={{opacity: 0.2}} onPress={() => navigation.navigate('ForgotPassword', {
                username: globalUsername, // Pass the globalUsername variable as a parameter
                password: globalPass, // Pass the globalPassword variable as a parameter
                })
            }
            >
                <Text color="info.500">Forgot Password?</Text>
            </Pressable>
            <Button onPress={() => handleLogin(username, password, navigation)} w="32" _pressed={{backgroundColor: "Colors.gray", opacity: 0.6}} bg={Colors.btnColor} borderRadius="10" shadow="9" >
                <Text fontSize="lg" color={Colors.white}>Login</Text>
            </Button>
            <Box flex={1} flexDirection="row">
                <Text color={Colors.secondary_txt}>Don't have an account?</Text>
                <Pressable _pressed={{opacity: 0.2}} onPress={() => navigation.navigate('Register')}>
                    <Text color="info.500"> Sign Up</Text>
                </Pressable>
            </Box>

        </Box>
    )
}

export default LoginForm