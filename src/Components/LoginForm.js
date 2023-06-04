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
            gap="2"
            paddingLeft="3"
            paddingRight="3">
            <Text fontSize="md" fontWeight="500" color={Colors.main_light}>Login</Text>
            <Text fontSize="md" fontWeight="700" color={Colors.main_dark}>Please input your credentials.</Text>
            <Text fontWeight="700" color={Colors.white}>Username:</Text>
            <Input borderRadius="10" _focus={{bg: "white"}} variant="filled" size="md" placeholder="Enter your Username" shadow="5" />
            <Text fontWeight="600" color={Colors.white}>Password:</Text>
            <Input shadow="5" _focus={{bg: "white"}} borderRadius="10" bg="white" variant="filled" size="md" type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="emerald.600" />
                    </Pressable>} placeholder="Password" />
            <Pressable w="full" alignItems="flex-end" _pressed={{opacity: 0.2}}>
                <Text color="info.500">Forgot Password?</Text>
            </Pressable>
            <Button w="32" _pressed={{backgroundColor: "Colors.gray", opacity: 0.6}} bg={Colors.btnColor} borderRadius="10" shadow="9" >
                <Text fontSize="lg" color={Colors.white}>Login</Text>
            </Button>
            <Box flex={1} flexDirection="row">
                <Text color={Colors.secondary_txt}>Don't have an account?</Text>
                <Pressable _pressed={{opacity: 0.2}}>
                    <Text color="info.500"> Sign Up</Text>
                </Pressable>
            </Box>

        </Box>
    )
}

export default LoginForm