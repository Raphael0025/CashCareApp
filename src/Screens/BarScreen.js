import React from 'react'
import { Box, Text } from 'native-base'
import Colors from '../data/color'
import BarGraph from '../Components/BarGraph'

function BarScreen() {
    
    return (
        <Box flex={1} py="5" px="5" bg={Colors.dark_gray}>
            <BarGraph />
        </Box>
    )
}

export default BarScreen