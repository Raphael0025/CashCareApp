import React from 'react'
import {Box, Text, HStack} from 'native-base'
import Colors from '../data/color';

export default function StepIndicator() {
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
            {indicator.map((item) =>{
                return <Box alignItems="center" key={item.key}>
                            <Box alignItems="center" justifyContent="center" w="10" h="10" borderRadius="25" bg={Colors.stepColor}>
                                <Text fontSize="xl" color={Colors.gray} >{item.id}</Text>
                            </Box>
                            <Text fontSize="12" fontWeight="600" color={Colors.white} >{item.title}</Text>
                        </Box>
            })}
        </HStack>
    )
}