import React from 'react'
import {Box, Text, Input, Image, Button} from 'native-base'
import Colors from '../data/color';

function Personal({formData, setFormData}) {

    return (
        <Box gap="3.5">
            <Box>
                <Text color={Colors.main_light} fontWeight="600">First Name:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your First Name:" variant="filled" rounded="lg" shadow="5" value={formData.fName} 
                    onChangeText={(fName) =>{
                        setFormData({...formData, fName})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Last Name:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your Last Name:" variant="filled" rounded="lg" shadow="5" value={formData.lName} 
                    onChangeText={(lName) =>{
                        setFormData({...formData, lName})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Gender:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your Gender:" variant="filled" rounded="lg" shadow="5" value={formData.gender} 
                    onChangeText={(gender) =>{
                        setFormData({...formData, gender})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Birth Date:</Text>
                <Input _focus={{bg: "white"}} placeholder="MM/DD/YYYY" variant="filled" rounded="lg" shadow="5" value={formData.bday} 
                    onChangeText={(bday) =>{
                        setFormData({...formData, bday})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Mobile Phone Number:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your Contact" variant="filled" rounded="lg" shadow="5" value={formData.contact} 
                    onChangeText={(contact) =>{
                        setFormData({...formData, contact})
                    }}
                />
            </Box>
            <Text color={Colors.white} fontWeight="600">Please input your Credentials carefully.</Text>
            <Box>
                <Text color={Colors.main_light} fontWeight="600">User Name:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your User Name" variant="filled" rounded="lg" shadow="5" value={formData.uName} 
                    onChangeText={(uName) =>{
                        setFormData({...formData, uName})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Email Address:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your Email" variant="filled" rounded="lg" shadow="5" value={formData.email} 
                    onChangeText={(email) =>{
                        setFormData({...formData, email})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Password:</Text>
                <Input _focus={{bg: "white"}} placeholder="Enter your Password" variant="filled" rounded="lg" shadow="5" value={formData.password} 
                    onChangeText={(password) =>{
                        setFormData({...formData, password})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.main_light} fontWeight="600">Confirm your password:</Text>
                <Input _focus={{bg: "white"}} placeholder="Confirm your password" variant="filled" rounded="lg" shadow="5" value={formData.cPass} 
                    onChangeText={(cPass) =>{
                        setFormData({...formData, cPass})
                    }}
                />
            </Box>
        </Box>
    )
}

export default Personal