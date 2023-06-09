import React from 'react'
import { Box, Text } from 'native-base'
import Colors from '../data/color'

function Expense({navigation}) {
    return (
        <Box flex={1} py="5" px="5" bg={Colors.dark_gray}>
        
            <Box w="full" flexDirection="row" borderRadius="15" marginBottom="3" borderWidth="1" padding="2" borderColor={Colors.main_dark} >
                <Box flexDirection="column" gap="2" paddingLeft="6" >
                    <Text color="white" fontSize="16" fontWeight="700"  >Pork </Text>
                    <Text color="#ffffff50" fontSize="12" bold >Good</Text>
                    <Text color="#ffffff75"  fontSize="13" bold >MM</Text>
                </Box>
                
                <Box w="60%" alignItems="center" justifyContent="center" >
                    <Text textAlign="center" color="white" bold fontSize="16" >Php 65</Text>
                </Box>
            </Box>

        </Box>
    )
}

export default Expense