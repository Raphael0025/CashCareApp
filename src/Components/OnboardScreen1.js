import React from 'react'
import {Box, Text, Image, Button, ScrollView} from 'native-base'
import Colors from '../data/color';
import LottieView from 'lottie-react-native';

function OnboardScreen1() {
    return (
        <>
            <Box >
                <LottieView source={require('../../assets/one/sample.json')}
                            style={{aspectRatio: 1, width: '100%'}}
                            autoPlay
                            loop
                            />
            </Box>
            <Box paddingLeft="16" w="72" alignItems="flex-start">
                <Text fontSize="28" fontWeight="800" >Set up your </Text>
                <Text fontSize="28" fontWeight="800" >Budget</Text>
                <Text fontSize="16" fontWeight="500" >Create a list for your budget and your spelling against it.</Text>
            </Box>
        </>
    )
}

export default OnboardScreen1