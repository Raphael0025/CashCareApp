import React, {useState} from 'react'
import {Box, Text, Image, Button, Pressable, useColorModeValue} from 'native-base'
import Colors from '../data/color';
import OnboardScreen1 from '../Components/OnboardScreen1'
import OnboardScreen2 from '../Components/OnboardScreen2'
import OnboardScreen3 from '../Components/OnboardScreen3'
import OnboardScreen4 from '../Components/OnboardScreen4'
import { AntDesign } from '@expo/vector-icons';
import { NavigationHelpersContext } from '@react-navigation/native';

function OnboardingScreen({navigation}) {
    const colors = ['#BFD834','#72CC50','#019875', '#233A3A']
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [screen, setScreen] = useState(0);
    
    const ScreenDisplay = () => {
        if(screen === 0){
            return <OnboardScreen1 />
        } else if(screen === 1){
            return <OnboardScreen2 />
        } else if(screen === 2){
            return <OnboardScreen3 />
        } else if(screen >= 3){
            return <OnboardScreen4 />
        } else {
            setScreen(0);
        }
    }
    
    return (
        <Box flex={1} alignItems="center" justifyContent="flex-start" bg={colors[currentSlide]}>
            <Box paddingTop="20" alignItems="flex-end" w="full" >
                <Pressable  _pressed={{opacity: 0.6, color: "red" }} w="1/4">
                    <Text fontSize="xl" fontWeight="700" color={Colors.main_dark}>Skip</Text>
                </Pressable>
            </Box>
            <Box>{ScreenDisplay()}</Box>
            <Box paddingTop="5" alignItems="flex-end" justifyContent="flex-start" w="full">
                {
                    screen === 3 
                    ? 
                    <Box w="full" paddingTop="5" alignItems="center" justifyContent="center">
                        <Button onPress={() => navigation.navigate('Login')} bg="gray.600" style={{height: "40%", width: "40%"}} borderRadius="25" _pressed={{opacity: 0.8, backgroundColor: "gray" }} alignItems="center" justifyContent="center">Get Started</Button>
                    </Box>
                    :
                    <Pressable  _pressed={{opacity: 0.6, color: "red" }} w="full" alignItems="flex-end" paddingRight="12" onPress={() => {
                        setScreen((currScreen) => currScreen + 1)
                        setCurrentSlide(currentSlide + 1);
                    }}>
                        <AntDesign name="arrowright" size={64} color="black" />
                    </Pressable>
                }
            </Box>
        </Box>
    )
}

export default OnboardingScreen