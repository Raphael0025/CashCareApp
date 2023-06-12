import React from 'react'
import {Box} from 'native-base'
import Colors from '../data/color';
import TopTabNav from '../Navigation/TopTabNav'

function StatsScreen() {
    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <TopTabNav />
        </Box>
    )
}

export default StatsScreen