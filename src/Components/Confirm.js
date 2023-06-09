import React from 'react'
import {Box, Text, Button, View} from 'native-base'
import Colors from '../data/color';
import {AsynchStorage} from 'react-native'

function Confirm({formData, setFormData}) {
    return (
        <Box gap="5">
            <Box alignItems="flex-start" justifyContent="flex-start" gap="3" borderRadius="20" w="full" h="80" padding="4"
                bg={{
                    linearGradient: {
                        colors: [Colors.white, "#B5D263"],
                        start: [1.5, 0],
                        end: [1.5, 1.5],
                        }
                    }}>
                <Text fontWeight={800} fontSize="16" color="#4A5568">Personal:</Text>
                <View w="full" style={{height: 3, backgroundColor: "#409999"}}/>
                <Box flexDirection="row" gap="5">
                    <Box flexDirection="row">
                        <Text color="#7A7474" fontWeight={800}>First Name:</Text>
                        <Text> {formData.fName}</Text>
                    </Box>

                    <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Last Name:</Text>
                        <Text> {formData.lName}</Text>
                    </Box>
                </Box>

                <Box flexDirection="row" gap="5">
                    <Box flexDirection="row">
                        <Text color="#7A7474" fontWeight={800}>Gender:</Text>
                        <Text> {formData.gender}</Text>
                    </Box>

                    <Box flexDirection="row">
                        <Text color="#7A7474" fontWeight={800}>Birth Date:</Text>
                        <Text> {formData.bday}</Text>
                    </Box>
                </Box>
                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Mobile Phone No.:</Text>
                    <Text> {formData.contact}</Text>
                </Box>

                <Text fontWeight={800} color="#4A5568" fontSize="16">Credentials:</Text>
                <View w="full" style={{height: 3, backgroundColor: "#409999"}}/>
                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>User Name:</Text>
                    <Text> {formData.uName}</Text>
                </Box>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Email Address:</Text>
                    <Text> {formData.email}</Text>
                </Box>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Password:</Text>
                    <Text> {formData.password}</Text>
                </Box>
            </Box>

            <Box alignItems="flex-start" gap="3" justifyContent="flex-start" borderRadius="20" w="full" h="56" padding="5" 
                bg={{
                        linearGradient: {
                            colors: [Colors.white, "#89BA58"],
                            start: [1.5, 0],
                            end: [1.5, 1.5],
                            }
                        }}>
                <Text fontWeight={800} fontSize="16" color="#4A5568">Occupation:</Text>
                <View w="full" style={{height: 3, backgroundColor: "#409999"}}/>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Job Description:</Text>
                    <Text> {formData.jobDesc}</Text>
                </Box>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Employment Status:</Text>
                    <Text> {formData.employment}</Text>
                </Box>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Work Field:</Text>
                    <Text> {formData.work}</Text>
                </Box>

                <Box flexDirection="row">
                    <Text color="#7A7474" fontWeight={800}>Work Hr/ s:</Text>
                    <Text> {formData.workHr}</Text>
                </Box>

            </Box>

            <Box alignItems="flex-start" justifyContent="flex-start" borderRadius="20" w="full" h="32" padding="5" 
                bg={{
                        linearGradient: {
                            colors: [Colors.white, "#5A7C87"],
                            start: [0, 0],
                            end: [0, 1],
                            }
                        }}>
                <Text fontWeight={800} fontSize="16" color="#4A5568">Financial:</Text>
                <View w="full" style={{height: 3, backgroundColor: "#409999"}}/>

                <Box flexDirection="row" paddingTop="5">
                    <Text color="white" fontWeight={800}>Current Amount:</Text>
                    <Text> Php {formData.amount}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Confirm