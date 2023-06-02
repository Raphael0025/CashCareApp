import React from 'react'
import {Box, Input, Text, Icon, Pressable, Button} from 'native-base'
import Colors from '../data/color';
import {StyleSheet} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

function LoginForm() {
    const [show, setShow] = React.useState(false);
    return (
        <Box flex={1} 
        w="full" 
        h="150" 
        alignItems="flex-start" 
        justifyContent='flex-start' 
        padding="2">
            <Text>Login</Text>
            <Text>Please input your credentials.</Text>
            <Text>Username:</Text>
            <Input borderRadius="10" bg="white" variant="filled" size="md" placeholder="Enter your Username" shadow="5" />
            <Text>Password:</Text>
            <Input shadow="5"  borderRadius="10" bg="white" variant="filled" size="md" type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>} placeholder="Password" />
            <Pressable w="full" alignItems="flex-end">
                <Text>Forgot Password?</Text>
            </Pressable>
            <Button shadow="9">Login</Button>
            <Box flex={1} flexDirection="row">
                <Text >
                    Don't have an account? 
                </Text>
                <Pressable>
                    <Text> Sign Up</Text>
                </Pressable>
            </Box>

        </Box>
    )
}

export default LoginForm