import React, {useEffect, useState} from 'react'
import {Box, Text, Icon, CheckIcon, Input, ScrollView, Select, Pressable, Button} from 'native-base'
import Colors from '../data/color';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState(null);

    useEffect(() => { getUserData(); }, []);

    const getUserData = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const userData = JSON.parse(user);
            setData(userData);
        } catch (error) {
            console.log('Error retrieving user data:', error);
        }
    };

    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(() => {
        if (data) {
          // Set initial state with existing user details
            setUserDetails({
                fName: data.fName || '',
                lName: data.lName || '',
                gender: data.gender || '',
                bDay: data.bDay || '',
                jobDesc: data.jobDesc || '',
                employment: data.employment || '',
                work: data.work || '',
                workHr: data.workHr || '',
                uName: data.uName || '',
                email: data.email || '',
                password: data.password || '',
            });
        }
    }, [data]);

    const saveUserDetails = async () => {
        try {
            if (!userDetails) return; // Return if userDetails is null
        
            // Retrieve existing user data from AsyncStorage
            const storedData = await AsyncStorage.getItem('user');
            const userData = JSON.parse(storedData);
        
            // Create a copy of the existing user details
            const updatedData = { ...userData };
        
            // Update the fields that have been modified in userDetails
            for (const key in userDetails) {
                if (userDetails[key] !== userData[key]) {
                updatedData[key] = userDetails[key];
                }
            }
    
            // Save the updated user details to AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(updatedData));
            console.log('User details saved successfully!');
            alert('User details saved successfully!');
            console.log(updatedData);
    
            setData(updatedData);
        } catch (error) {
            console.log('Error saving user details:', error);
        }
    };

    const handleLogout = async () => {
        // Reset navigation and navigate to the login screen
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    const deleteUser = async () => {
        try {
            // Delete user data from AsyncStorage
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('expenseList'); // Delete expenseList
            await AsyncStorage.removeItem('budgetList'); // Delete budgetList
            console.log('User data deleted successfully!');
            navigation.navigate('Login'); // Redirect to login screen
        } catch (error) {
            console.log('Error deleting user data:', error);
        }
    };

    // Wait until userDetails is loaded before rendering the component
    if (!userDetails) {
        return null;
    }

    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <ScrollView >
             {/* Rest of the code */}
                {data && ( // Add conditional check for data existence
                <>
                    <Box justifyContent="center" alignItems="center" w="100%" h="15%" marginTop="5" >
                        <Box alignItems="flex-end" w="full" px="5">
                        <Pressable onPress={handleLogout}>
                            <Icon as={MaterialCommunityIcons} name="logout" size="8" color={Colors.main_dark} />
                        </Pressable>
                        </Box>
                        <Box borderRadius="100" bg="#5A6A7025" w="150" h="150" justifyContent="center" alignItems="center">
                            <Icon as={MaterialIcons} name="perm-identity" size="70" color={Colors.main_dark} />
                        </Box>
                    </Box>
                    <Box flex={1} padding="3" >
                        <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                            <Text bold color={Colors.gray} fontSize="md">Personal Information</Text>
                        </Box>
                        <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                            <Box w="45%">
                                <Text color="#06897C">First Name</Text>
                                <Input borderWidth="1.5" placeholder={data.fName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.fName}
                                    onChangeText={(fName) => {
                                        setUserDetails((prevState) => ({ ...prevState, fName }));
                                    }} />
                            </Box>
                            <Box w="45%">
                                <Text color="#06897C">Last Name</Text>
                                <Input borderWidth="1.5" placeholder={data.lName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.lName}
                                    onChangeText={(lName) => {
                                        setUserDetails((prevState) => ({ ...prevState, lName }));
                                    }} />   
                            </Box>
                        </Box>
                        <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center">
                            <Box w="45%">
                                <Text color="#06897C">Gender</Text>
                                <Select placeholder={data.gender} color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={userDetails.gender}  accessibilityLabel="Choose Gender"  _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={(itemValue) => {
                                                        setUserDetails((prevState) => ({ ...prevState, gender: itemValue }));
                                                        }}>
                                    <Select.Item label="Male" value="male" />
                                    <Select.Item label="Female" value="female" />
                                </Select>
                            </Box>
                            <Box w="45%">
                                <Text color="#06897C">Birth Date</Text>
                                <Input placeholder={data.bDay} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.bDay}
                                    onChangeText={(bDay) => {
                                        setUserDetails((prevState) => ({ ...prevState, bDay }));
                                    }} />
                            </Box>
                        </Box>
                        <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                            <Text bold color={Colors.gray} fontSize="md">Occupational Information</Text>
                        </Box>
                        <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                            <Box w="45%">
                                <Text color="#06897C">Job Description</Text>
                                <Input placeholder={data.jobDesc} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.jobDesc}
                                    onChangeText={(jobDesc) => {
                                        setUserDetails((prevState) => ({ ...prevState, jobDesc }));
                                    }} />
                            </Box>
                            <Box w="45%">
                                <Text color="#06897C">Employment Status</Text>
                                <Input placeholder={data.employment} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.employment}
                                    onChangeText={(employment) => {
                                        setUserDetails((prevState) => ({ ...prevState, employment }));
                                    }} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" flexWrap="wrap" w="100%" gap="3" alignItems="flex-start" paddingLeft="3" justifyContent="flex-start">
                            <Box w="60%">
                                <Text color="#06897C">Work Field</Text>
                                <Input placeholder={data.work} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.work}
                                    onChangeText={(work) => {
                                        setUserDetails((prevState) => ({ ...prevState, work }));
                                    }} />
                            </Box>
                            <Box w="38%">
                                <Text color="#06897C">Work Hr/s (Optional)</Text>
                                <Input placeholder={data.workHr} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.workHr}
                                    onChangeText={(workHr) => {
                                        setUserDetails((prevState) => ({ ...prevState, workHr }));
                                    }} />
                            </Box>
                        </Box>
                        <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                            <Text bold color={Colors.gray} fontSize="md">Credentials</Text>
                        </Box>
                        <Box flexDirection="column" w="100%" gap="3" alignItems="flex-start" justifyContent="flex-start" paddingLeft="3" marginBottom="3">
                            <Box w="75%">
                                <Text color="#06897C">User Name</Text>
                                <Input placeholder={data.uName} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.uName}
                                    onChangeText={(uName) => {
                                        setUserDetails((prevState) => ({ ...prevState, uName }));
                                    }} />
                            </Box>
                            <Box w="75%">
                                <Text color="#06897C">Email Address</Text>
                                <Input placeholder={data.email} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.email}
                                    onChangeText={(email) => {
                                        setUserDetails((prevState) => ({ ...prevState, email }));
                                    }} />
                            </Box>
                            <Box w="75%">
                                <Text color="#06897C">Password</Text>
                                <Input placeholder={data.password} type="password" borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.password}
                                    onChangeText={(password) => {
                                        setUserDetails((prevState) => ({ ...prevState, password }));
                                    }} />
                            </Box>
                        </Box>
                        <Box paddingLeft="3" flexDirection="row" paddingBottom="8" marginTop="3" alignItems="center" justifyContent="center" flex={1} gap="3" w="100%">
                            <Button w="45%" bg={Colors.main_dark} onPress={saveUserDetails}>Save</Button>
                            <Button w="45%" bg="danger.500" onPress={deleteUser}>Delete</Button>
                        </Box>
                    </Box>
                </>
            )}
            </ScrollView>
        </Box>
    )
}