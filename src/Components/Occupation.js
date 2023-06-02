import React from 'react'
import {Box, Text, Input} from 'native-base'
import Colors from '../data/color';

function Occupation({formData, setFormData}) {
    return (
        <Box gap="8">
            <Box>
                <Text color={Colors.black} fontWeight="500">Job Description:</Text>
                <Input placeholder="Enter your job description:" variant="filled" rounded="lg" shadow="5" value={formData.jobDesc} 
                    onChangeText={(jobDesc) =>{
                        setFormData({...formData, jobDesc})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.black} fontWeight="500">Employment Status:</Text>
                <Input placeholder="Enter your Employment Status:" variant="filled" rounded="lg" shadow="5" value={formData.employment} 
                    onChangeText={(employment) =>{
                        setFormData({...formData, employment})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.black} fontWeight="500">Work Field:</Text>
                <Input placeholder="Enter your Work Field:" variant="filled" rounded="lg" shadow="5" value={formData.work} 
                    onChangeText={(work) =>{
                        setFormData({...formData, work})
                    }}
                />
            </Box>

            <Box>
                <Text color={Colors.black} fontWeight="500">Work Hr/s:</Text>
                <Input placeholder="Enter your Work Hour/s" variant="filled" rounded="lg" shadow="5" value={formData.workHr} 
                    onChangeText={(workHr) =>{
                        setFormData({...formData, workHr})
                    }}
                />
            </Box>

        </Box>
    )
}

export default Occupation