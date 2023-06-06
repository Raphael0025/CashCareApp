import React from 'react'
import {Text, Radio, Button, ScrollView, Box} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'

function Time_DateSettingsScreen() {
    const date = "MM/DD/YYYY"
    const time = "12:00"
    return (
        <Box flex={1} bg={Colors.dark_gray}>
            <TopHomeBar screenName={"Date and Time"} />
            <ScrollView>
                <Box flex={1} gap="4" padding="3" >
                    <Button shadow={5} _pressed={{backgroundColor: "gray.500"}} bg="#342F2Fee" justifyContent="flex-start" paddingLeft="10">
                        <Text color={Colors.white} fontSize="lg">Date Format</Text>
                        <Text color={Colors.gray} fontSize="xs">{date}</Text>
                    </Button>

                    <Button shadow={5} _pressed={{backgroundColor: "gray.500"}} bg="#342F2Fee" justifyContent="flex-start" paddingLeft="10">
                        <Text color={Colors.white} fontSize="lg">Time Format</Text>
                        <Text color={Colors.gray} fontSize="xs">{time}</Text>
                    </Button>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Time_DateSettingsScreen