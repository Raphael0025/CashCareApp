import React from 'react'
import { Box, Text } from 'native-base'
import Colors from '../data/color'
import PieGraph from '../Components/PieGraph'

function PieScreen() {
    return (
        <Box flex={1} py="5" px="5" bg={Colors.dark_gray}>
            <PieGraph />
        </Box>
    )
}

export default PieScreen