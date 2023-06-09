import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileScreen() {
    const [service, setService] = React.useState("");

    const [data, setData] = React.useState([])
    React.useEffect(()=>{
        const geData = async () => {
            try{
                const user = await AsyncStorage.getItem('user')
                if(user !== null){
                    const curr_user = JSON.parse(user)  
                    setData(curr_user)
                }
            } catch (error){}
        }
        geData();
    },[])

    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <ScrollView >
                <Box justifyContent="center" alignItems="center" w="100%" h="15%" marginTop="5" >
                    <Box borderRadius="100" bg="#5A6A7025" w="150" h="150" justifyContent="center" alignItems="center">
                        <Icon as={MaterialIcons} name="perm-identity" size="70" color={Colors.main_dark} />
                    </Box>
                </Box>
                <Box flex={1} padding="3" >
                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Personal Information</Text>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                        <Box w="45%">
                            <Text color="#06897C">First Name</Text>
                            <Input borderWidth="1.5" placeholder={data.fName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Last Name</Text>
                            <Input borderWidth="1.5" placeholder={data.lName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />     
                        </Box>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center">
                        <Box w="45%">
                            <Text color="#06897C">Gender</Text>
                            <Select placeholder={data.gender} color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={service}  accessibilityLabel="Choose Gender"  _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Male" value="male" />
                                <Select.Item label="Female" value="female" />
                            </Select>
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Birth Date</Text>
                            <Input placeholder={data.bday} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>

                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Occupational Information</Text>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                        <Box w="45%">
                            <Text color="#06897C">Job Description</Text>
                            <Input placeholder={data.jobDesc} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Employment Status</Text>
                            <Input placeholder={data.employment} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>
                    <Box flexDirection="row" flexWrap="wrap" w="100%" gap="3" alignItems="flex-start" paddingLeft="3" justifyContent="flex-start">
                        <Box w="60%">
                            <Text color="#06897C">Work Field</Text>
                            <Input placeholder={data.work} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                        <Box w="38%">
                            <Text color="#06897C">Work Hr/s (Optional)</Text>
                            <Input placeholder={data.workHr} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>

                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Credentials</Text>
                    </Box>
                    <Box flexDirection="column" w="100%" gap="3" alignItems="flex-start" justifyContent="flex-start" paddingLeft="3" marginBottom="3">
                        <Box w="75%">
                            <Text color="#06897C">User Name</Text>
                            <Input placeholder={data.uName} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                        <Box w="75%">
                            <Text color="#06897C">Email Address</Text>
                            <Input placeholder={data.email} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                        <Box w="75%">
                            <Text color="#06897C">Password</Text>
                            <Input placeholder={data.password} type="password" borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} />
                        </Box>
                    </Box>

                    <Box paddingLeft="3" flexDirection="row" paddingBottom="8" marginTop="3" alignItems="center" justifyContent="center" flex={1} gap="3" w="100%">
                        <Button w="45%" bg={Colors.main_dark}>Save</Button>
                        <Button w="45%" bg="danger.500" >Delete</Button>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default ProfileScreen