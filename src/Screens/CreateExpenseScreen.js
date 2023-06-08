import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

function CreateExpenseScreen() {

    const [list, setList] = React.useState([
        {category: "name"}
    ]);

    const listC =  [
        {
            key: "1",
            category: "Food & Groceries"
        },
        {
            key: "2",
            category: "Housing & Utilities"
        },{
            key: "3",
            category: "Transportation"
        },
        {
            key: "4",
            category: "Personal & Health"
        },{
            key: "5",
            category: "Entertainment"
        },
        {
            key: "6",
            category: "Study & Training"
        },
        {
            key: "7",
            category: "Miscellaneous"
        },
        {
            key: "8",
            category: "Others"
        },
        {
            key: "9",
            category: "Customize"
        }
    ]

    return (
        <Box flex={1} bg={Colors.dark_gray} >
            <TopHomeBar screenName="Expense" />
            <Box flex={1} padding="5" >
                <Box gap="16">
                    <Box>
                        <Text color={Colors.main_light} bold fontSize="lg">Description</Text>
                        <Input variant="underlined" bordeBottomrWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} color={Colors.secondary_txt} borderBottomColor={Colors.main_light} />
                    </Box>
                    <Box flexDirection="row" gap="5">
                        <Box w="45%" gap="2">
                            <Text bold fontSize="lg" color={Colors.main_light}>Duration</Text>
                            <Select  color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={list}  accessibilityLabel="Select" placeholder="Select" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="Daily" value="daily" />
                                    <Select.Item label="Weekly" value="weekly" />
                            </Select>
                        </Box>
                        <Box w="45%" gap="2">
                            <Text bold fontSize="lg" color={Colors.main_light}>Date</Text>
                            <Input borderWidth="1.5" placeholder="MM/DD/YYYY" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>
                    <Box gap="3">
                        <Text bold fontSize="lg" color={Colors.main_light}>Amount</Text>
                        <Box flexDirection="row" gap="2" alignItems="center" >
                            <Text textAlign="right" bold color={Colors.gray} w="20%" fontSize="xl">PHP </Text>
                            <Input keyboardType='numeric' w="80%" borderWidth="1.5" placeholder="0.00" fontSize="md" _focus={{bg: Colors.widgetBG}} color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>
                    <Box gap="3">
                        <Text bold fontSize="lg" color={Colors.main_light}>Category</Text>
                        <Select  color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={list}  accessibilityLabel="Select" placeholder="Select" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setList(itemValue)}>
                            { listC.map((key, itm) =>{
                                return <Select.Item label={key.category} value={key.category} />
                            })}
                        </Select>
                    </Box>
                </Box> 
                <Box marginTop="12" gap="5" flexDirection="row">
                    <Button w="45%" bg="danger.600">Cancel</Button>
                    <Button w="45%" bg="primary.600">Create</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CreateExpenseScreen