import React from 'react'
import {Box, Text, Image, Button, ScrollView} from 'native-base'
import Colors from '../data/color';
import StepIndicator from '../Components/StepIndicator'
import Form from '../Components/Form'

function RegisterScreen() {
    return (
        <Box flex={1} bg={{
            linearGradient: {
                colors: [Colors.bgGradient, Colors.black],
                start: [1.5, 0],
                end: [1.5, 1.5]
                }
            }}> 
            <Box w='full' h='1/6' alignItems="center" justifyContent='center'>
                <Image size='xs' w='full' h="100" alt="logo" source={require('../../assets/txtlogo.png')}/>
            </Box>

            <ScrollView marginLeft="5" marginRight="5" h="2xl" >
            
                <Box flex={1} alignItems="center" justifyContent='flex-start' paddingTop="5" paddingLeft="5" paddingRight="5" gap="2.5"
                    w="full" h="2xl" borderRadius="30" 
                    bg={{
                    linearGradient: {
                        colors: [Colors.white, Colors.tertiaryBGColor, Colors.secondaryColor],
                        start: [1.5, 0],
                        end: [1.5, 1.5],
                        locations: [0, 0.5, 0.85]
                        }
                    }}>
                    <Box w="full" alignItems="flex-end" marginRight="5">
                        <Text color={Colors.secondaryColor} fontSize="2xl" fontWeight="700" >Create Account</Text>
                    </Box>
                    <Box borderRadius="25" w="full" h="1/6" shadow="9" alignItems="center" justifyContent="center"
                        bg={{
                        linearGradient: {
                            colors: [Colors.white, Colors.tertiaryBGColor, Colors.secondaryColor],
                            start: [1.5, 0],
                            end: [1.5, 1.5],
                            locations: [0, 0.6, 0.9]
                            }
                        }}>
                        <StepIndicator />
                    </Box>
                    <ScrollView>
                        <Form />
                    </ScrollView>
                </Box>
            </ScrollView>

            <Box top="24" position="absolute" bg={Colors.secondaryColor} borderRadius="50" w="20" h="20" alignItems="center" justifyContent="center">
                <Image w="full" size="12" alt="logo" source={require('../../assets/hand.png')} />
            </Box>
        </Box>
    )
}

export default RegisterScreen