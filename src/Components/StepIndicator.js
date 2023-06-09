import React from 'react'
import {Box, Text, HStack} from 'native-base'
import Colors from '../data/color';

function StepIndicator() {
    const indicator = [
        {
            key: 1,
            id: "1",
            title: "Personal"
        },
        {
            key: 2,
            id: "2",
            title: "Occupation"
        },
        {
            key: 3,
            id: "3",
            title: "Financial"
        },
        {
            key: 4,
            id: "4",
            title: "Confirm"
        },
    ]
    return (
        <HStack space="8" justifyContent="center">
            {indicator.map((key) =>{
                return <Box alignItems="center" >
                            <Box alignItems="center" justifyContent="center" w="10" h="10" borderRadius="25" bg={Colors.stepColor}>
                                <Text fontSize="xl" color={Colors.gray}>{key.id}</Text>
                            </Box>
                            <Text fontSize="12" fontWeight="600" color={Colors.white}>{key.title}</Text>
                        </Box>
            })}
        </HStack>
    )
}

export default StepIndicator