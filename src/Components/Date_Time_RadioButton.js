import React from 'react'
import {Text, Radio, Box} from 'native-base'
import Colors from '../data/color';

function Date_Time_RadioButton({item}) {
    const [value, setValue] = React.useState("one");
    return (
        <Box>
            { item.map((item) =>{
                return <Box borderRadius="10" bg="#342F2Fee" flexDirection="row" marginTop="15" shadow={9} >
                    <Box padding="6" alignItems="flex-end" justifyContent="center">
                        <Radio.Group defaultValue="one" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                            <Radio value={item.val} my={1} accessibilityLabel="favorite number"></Radio>
                        </Radio.Group>
                    </Box>
                    <Box flexDirection="column" borderRadius="10" padding="6">
                        <Text fontSize="lg" color={Colors.white} >{item.Title}</Text>
                    </Box>
                </Box>
            })}
        </Box>
    )
}

export default Date_Time_RadioButton