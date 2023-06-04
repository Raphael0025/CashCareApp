import React from 'react'
import {Box, Text, Image, Button, ScrollView} from 'native-base'
import Colors from '../data/color';

function sc4() {
    return (
        <Box padding="0.5">
            <Image alt="OBS" source={require('../../assets/logo.png')} w="100%" h="40"/>
            <Box h="72" w="full" alignItems="flex-end" justifyContent="flex-end">
                <Text fontSize="42" fontWeight="700" color="#57B6AE25">Smart</Text>
                <Text fontSize="46" fontWeight="700" color="#57B6AE25">Spending</Text>
                <Text fontSize="50" fontWeight="700" color="#57B6AE25">start here!</Text>
            </Box>
        </Box>
    )
}

export default sc4