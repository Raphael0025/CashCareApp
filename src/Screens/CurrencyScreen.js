import React from 'react'
import {View, Text, ScrollView, Box} from 'native-base'
import TopHomeBar from '../Components/TopHomeBar'
import Colors from '../data/color';
import RadioButton from '../Components/RadioButton'

function CurrencyScreen() {
    const item = {Title: "Philippine Peso (PHP)", caption: "Default"}
    return (
        <Box flex={1} bg={Colors.dark_gray}>
            <TopHomeBar screenName={"Currency"} />
            <ScrollView>
                <Box flex={1} padding="3" >
                    <RadioButton item={item} />
                </Box>
            </ScrollView>
        </Box>
    )
}

export default CurrencyScreen