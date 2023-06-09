import React from 'react'
import {Box, Image, Text, View, ScrollView, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import Ledger from '../Components/Ledger'
import BudgetSummary from '../Components/BudgetSummary'
import ExpenseSummary from '../Components/ExpenseSummary'
import PieGraph from '../Components/PieGraph'
import LineGraph from '../Components/LineGraph'
import BarGraph from '../Components/BarGraph'
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({navigation}) {
    const [amount, setAmount] = React.useState(0)
    React.useEffect(()=>{
        const getAmount = async () => {
            try{
                const ttl = await AsyncStorage.getItem('user')
                if(ttl !== null){
                    const curr_user = JSON.parse(ttl)  
                    const num = parseInt(curr_user.amount)
                    setAmount(num)
                }
            } catch (error){}
        }
        getAmount();
    },[])
    
    return (
        <Box flex={1} bg={Colors.main_dark}  >
            <ScrollView nestedScrollEnabled = {true}>
                <Box flex={1} paddingBottom="62" >
                    <Box flex={1} justifyContent="flex-start" padding="5" >
                        <Text fontWeight="bold" fontSize="20" color={Colors.title_color}>Ledger</Text>
                        <Ledger price={amount}/>
                    </Box>
                    <Box flex={1} alignItems="flex-start" gap="10" padding="5" paddingTop="0" >
                        <BudgetSummary navigation={navigation} />
                        <ExpenseSummary navigation={navigation} />
                        <PieGraph navigation={navigation} />
                        <LineGraph navigation={navigation} />
                        <BarGraph navigation={navigation} /> 
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default HomeScreen