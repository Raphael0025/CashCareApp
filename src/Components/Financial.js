import React from 'react'
import {Box, Text, Input} from 'native-base'
import Colors from '../data/color';

function Financial({formData, setFormData}) {
    return (
        <Box flex={1} alignItems="center" justifyContent="center" >
            <Text color={Colors.main} fontSize="2xl" fontWeight="500">How much cash do you currently have?</Text>
            <Box bg={"#5A6A7075"} borderColor={"#315151"} borderWidth="2" flex={1} borderRadius="125" w="56" h="56" flexDirection="row" alignItems="center" justifyContent="center">
                <Text alignItems="flex-end" justifyContent="flex-end" fontSize="2xl">Php</Text>
                <Input fontSize="2xl" variant="unstyled" w="3/5" value={formData.amount} 
                    onChangeText={(amount) =>{
                        setFormData({...formData, amount})
                    }}
                />
            </Box>
        </Box>
    )
}

export default Financial