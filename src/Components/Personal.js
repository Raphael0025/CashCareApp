import React from 'react'
import {Box, ScrollView,Text, Input, Select, CheckIcon, Image, Button} from 'native-base'
import Colors from '../data/color';

function Personal({formData, setFormData}) {
    const [service, setService] = React.useState("");
    return (
        <Box h="550" flexDirection="column" >
            <ScrollView vertical nestedScrollEnabled = {true} >
                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">First Name:</Text>
                    <Input _focus={{bg: "white"}} placeholder="Enter your First Name:" variant="filled" rounded="lg" shadow="5" value={formData.fName} 
                        onChangeText={(fName) =>{
                            setFormData({...formData, fName})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Last Name:</Text>
                    <Input _focus={{bg: "white"}} placeholder="Enter your Last Name:" variant="filled" rounded="lg" shadow="5" value={formData.lName} 
                        onChangeText={(lName) =>{
                            setFormData({...formData, lName})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Gender:</Text>
                    <Select variant="filled" _focus={{bg: "white"}} color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={service} accessibilityLabel="Choose Gender" placeholder="Choose Gender" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} value={formData.gender = service} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Male" value="Male" />
                        <Select.Item label="Female" value="Female" />
                    </Select>
                    
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Birth Date:</Text>
                    <Input _focus={{bg: "white"}} placeholder="MM/DD/YYYY" variant="filled" rounded="lg" shadow="5" value={formData.bday} 
                        onChangeText={(bday) =>{
                            setFormData({...formData, bday})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Mobile Phone Number:</Text>
                    <Input keyboardType='numeric' _focus={{bg: "white"}} placeholder="Enter your Contact" variant="filled" rounded="lg" shadow="5" value={formData.contact} 
                        onChangeText={(contact) =>{
                            setFormData({...formData, contact})
                        }}
                    />
                </Box>
                <Text mb="3" color={Colors.white} fontWeight="600">Please input your Credentials carefully.</Text>
                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">User Name:</Text>
                    <Input _focus={{bg: "white"}} placeholder="Enter your User Name" variant="filled" rounded="lg" shadow="5" value={formData.uName} 
                        onChangeText={(uName) =>{
                            setFormData({...formData, uName})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Email Address:</Text>
                    <Input _focus={{bg: "white"}} placeholder="Enter your Email" variant="filled" rounded="lg" shadow="5" value={formData.email} 
                        onChangeText={(email) =>{
                            setFormData({...formData, email})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Password:</Text>
                    <Input type="password" _focus={{bg: "white"}} placeholder="Enter your Password" variant="filled" rounded="lg" shadow="5" value={formData.password} 
                        onChangeText={(password) =>{
                            setFormData({...formData, password})
                        }}
                    />
                </Box>

                <Box mb="3">
                    <Text color={Colors.main_light} fontWeight="600">Confirm your password:</Text>
                    <Input type="password" _focus={{bg: "white"}} placeholder="Confirm your password" variant="filled" rounded="lg" shadow="5" value={formData.cPass} 
                        onChangeText={(cPass) =>{
                            setFormData({...formData, cPass})
                        }}
                    />
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Personal