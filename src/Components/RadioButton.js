import React from 'react'
import {Text, Radio, Box} from 'native-base'
import Colors from '../data/color';

function RadioButton({item}) {
    return (
        <Box borderRadius="10" bg="#342F2Fee" flexDirection="row" shadow={9} >
            <Box padding="6" alignItems="flex-end" justifyContent="center">
                <Radio.Group defaultValue="one">
                    <Radio value="one" my={1} accessibilityLabel="favorite number"></Radio>
                </Radio.Group>
            </Box>
            <Box flexDirection="column" borderRadius="10" padding="6">
                <Text fontSize="lg" color={Colors.white} >{item.Title}</Text>
                <Text fontSize="md" color={Colors.gray} >{item.caption}</Text>
            </Box>
        </Box>
    )
}

export default RadioButton