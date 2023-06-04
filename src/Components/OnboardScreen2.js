import React from 'react'
import {Box, Text, Image, Button, ScrollView} from 'native-base'
import Colors from '../data/color';
import LottieView from 'lottie-react-native';

function sc2() {
    return (
        <>
            <Box >
                <LottieView source={require('../../assets/two/sample.json')}
                            style={{aspectRatio: 1, width: '100%'}}
                            autoPlay
                            loop
                            />
            </Box>
            <Box paddingLeft="16" w="72" alignItems="flex-start">
                <Text fontSize="28" fontWeight="800" >Track your </Text>
                <Text fontSize="28" fontWeight="800" >Expenses</Text>
                <Text fontSize="16" fontWeight="500" >Input your expenses and attach a photo of the receipt.</Text>
            </Box>
        </>
    )
}

export default sc2