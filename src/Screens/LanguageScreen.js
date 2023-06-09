import React from 'react'
import {Text, Box} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import RadioButton from '../Components/RadioButton'

function LanguageScreen() {
    const item = {Title: "United States (English)", caption: "Default"}
    return (
        <Box flex={1} bg={Colors.dark_gray}>
            <Box flex={1} padding="3" >
                <RadioButton item={item} />
            </Box>
        </Box>
    )
}

export default LanguageScreen