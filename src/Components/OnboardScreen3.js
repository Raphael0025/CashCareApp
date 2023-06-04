import React from 'react'
import {Box, Text, Image, Button, ScrollView} from 'native-base'
import Colors from '../data/color';
import LottieView from 'lottie-react-native';

function sc3() {
    return (
        <>
            <Box >
                <LottieView source={require('../../assets/three/sample.json')}
                            style={{aspectRatio: 1, width: '100%'}}
                            autoPlay
                            loop
                            />
            </Box>
            <Box paddingLeft="16" w="72" alignItems="flex-start">
                <Text fontSize="28" fontWeight="800" >Review your </Text>
                <Text fontSize="28" fontWeight="800" >Reports</Text>
                <Text fontSize="16" fontWeight="500" >Provide various reports and charts to help you analyze your spending habits.</Text>
            </Box>
        </>
    )
}

export default sc3