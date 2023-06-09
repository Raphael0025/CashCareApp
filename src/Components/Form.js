import React, {useState} from 'react'
import {Box, ScrollView, Text, Button} from 'native-base'
import Colors from '../data/color';

import Financial from './Financial'
import Occupation from './Occupation'
import Personal from './Personal'
import Confirm from './Confirm'

import AsyncStorage from "@react-native-async-storage/async-storage";

function Form({navigation}) {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        gender: "",
        bDay: "",
        contact: "",
        uName: "",
        email: "",
        password: "",
        cPass: "",

        jobDesc: "",
        employment: "",
        work: "",
        workHr: "",

        amount: "",
    });

    const [screen, setScreen] = useState(0);

    const ScreenDisplay = () => {
        if(screen === 0){
            return <Personal formData={formData} setFormData={setFormData} />
        } else if(screen === 1){
            return <Occupation formData={formData} setFormData={setFormData} />
        } else if(screen === 2){
            return <Financial formData={formData} setFormData={setFormData} />
        } else if(screen === 3){
            return <Confirm formData={formData} setFormData={setFormData} />
        } else if(screen > 3 ){
            setScreen(3);
        } else {
            setScreen(0);
        }
    }

    const storeData = async () => {
        try{
            await AsyncStorage.setItem('user', JSON.stringify(formData))
            alert("Success")
        } catch(error){
            console.log(error)
        }
    }

    const getUser = async () => {
        try{
            const user = await AsyncStorage.getItem('user')
            const curr_user = JSON.parse(user)
            alert(curr_user.amount)
            
        } catch(error){
            console.log(error)
        }
    }

    return (
        <Box>
            <Box>{ScreenDisplay()}</Box>
            <Box flex={1} marginTop="5" marginBottom="5" alignItems="center" justifyContent="center" flexDirection="row" gap="2">
                <Button _pressed={{opacity: 0.8, backgroundColor: 'gray'}} bg={Colors.white} w="32" onPress={() => {
                    setScreen((currScreen) => currScreen - 1)
                }}><Text color={Colors.main} fontWeight="900" fontSize="lg" >Cancel</Text></Button>
                <Button _pressed={{opacity: 0.8, backgroundColor: 'gray'}} bg={Colors.main_light} w="32" onPress={() => {
                    { screen != 3 ? setScreen((currScreen) => currScreen + 1) : [storeData(), navigation.navigate('Login')] }
                }}>
                    {
                        screen != 3 ?  <Text color={Colors.white} fontWeight="900" fontSize="lg" >Next</Text>
                        : <Text color={Colors.white} fontWeight="900" fontSize="lg" >Save</Text>
                    }
                </Button>
            </Box>
            
        </Box>
    )
}

export default Form