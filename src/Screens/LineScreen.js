import React from 'react'
import { Box, Text } from 'native-base'
import Colors from '../data/color'
import LineGraph from '../Components/LineGraph'

function LineScreen() {
    return (
        <Box flex={1} py="5" px="5" bg={Colors.dark_gray}>
            <LineGraph />
        </Box>
    )
}

export default LineScreen