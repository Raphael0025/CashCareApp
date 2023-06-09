import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import PieGraph from '../Components/PieGraph'
import LineGraph from '../Components/LineGraph'
import BarGraph from '../Components/BarGraph'
import TopTabNav from '../Navigation/TopTabNav'

function StatsScreen() {
    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <TopHomeBar screenName="Stats" />
            <TopTabNav />
        </Box>
    )
}

export default StatsScreen