import React from 'react'
import {Box, Image, Text, View, Button} from 'native-base'
import Colors from '../data/color';
import LoginForm from '../Components/LoginForm'

function LoginScreen() {
    return (
        <Box flex={1} bg={{
            linearGradient: {
                colors: [Colors.bgGradient, Colors.black],
                start: [1.5, 0],
                end: [1.5, 1.5]
                }
            }} alignItems="center" 
                justifyContent="space-evenly" 
                flexDirection="column" 
                paddingLeft="3" 
                paddingRight="3">
            <Box w='full' h='xl' alignItems="center" justifyContent='center'>
                <Image alt="CashCare" 
                    size='2xs'
                    w='200'
                    h="150"
                    source={require('../../assets/logo.png')}/>
            </Box>
            <Box w='full' h="2xl" borderRadius='25'
                bg={{
                    linearGradient: {
                        colors: [Colors.secondaryColor, Colors.white, Colors.black],
                        start: [0, 0],
                        end: [0, 1],
                        locations: [0, 0.2, 0.85]
                        }
                    }} flexDirection="column" 
                        justifyContent='space-evenly' 
                        alignItems="center"
                        paddingTop="12"
                        paddingLeft="5" 
                        paddingRight="5">
                
                <Button marginBottom="3" w="2xs" h="12" bg="red.500" shadow="6"><Text>Continue with Google</Text></Button>
                <View style={{height: 50,flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{flex: 1, height: 2, backgroundColor: '#4C9992'}} />
                    <View>
                        <Text style={{width: 50, fontSize:20, color:'#315A5A',textAlign: 'center'}}>or</Text>
                    </View>
                    <View style={{flex: 1, height: 2, backgroundColor: '#4C9992'}} />
                </View>
                <LoginForm />
            </Box>
        </Box>
    )
}

export default LoginScreen