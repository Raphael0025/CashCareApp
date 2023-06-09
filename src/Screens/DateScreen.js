import React from 'react'
import {Text, Button, Box} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import Date_Time_RadioButton from '../Components/Date_Time_RadioButton'

function DateScreen() {
    const item = [{key: 1 ,Title: "MM/DD/YYYY", val: "one"}, {key: 2, Title: "DD/MM/YYYY", val: "two"}]
    return (
        <Box flex={1} bg={Colors.dark_gray}>
            <TopHomeBar screenName="Date Format" />
            <Box flex={1} gap="3" padding="3" >
                <Date_Time_RadioButton item={item} />
            </Box>
            <Box w="full" h="15%" alignItems="flex-end" padding="4">
                <Button w="20%" >Save</Button>
            </Box>
        </Box>
    )
}

export default DateScreen