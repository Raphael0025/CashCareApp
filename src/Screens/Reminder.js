import React from 'react'
import {Box, Switch, Image, Text, Icon, CheckIcon, Input, ScrollView, Select, Button} from 'native-base'
import Colors from '../data/color';

function Reminder() {

const [switchToggle, setSwitch] = useState("on")

    return (
        <Box bg={Colors.dark_gray} flex={1} px="5" py="5">
            <Box px="5" py="8" flexDirection="row" w="full" h="1/5" borderRadius="15" bg={Colors.widgetBG}>
                <Box flexDirection="column" w="70%">
                    <Text color={Colors.white} fontSize="20" bold>Cash Care Reminder</Text>
                    <Text fontSize="12" color={Colors.gray}>Prompts at 19:00 to remind you to record your daily expenses</Text>
                </Box>
                <Box w="20%">
                    <Switch  />
                </Box>
            </Box>
            
        </Box>
    )
}

export default Reminder