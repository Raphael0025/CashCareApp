import React from 'react'
import {Box, Text, ScrollView} from 'native-base'
import Colors from '../data/color';
import Ledger from '../Components/Ledger'
import BudgetSummary from '../Components/BudgetSummary'
import ExpenseSummary from '../Components/ExpenseSummary'
import PieGraph from '../Components/PieGraph'
import LineGraph from '../Components/LineGraph'
import BarGraph from '../Components/BarGraph'
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({navigation}) {
    const [amount, setAmount] = React.useState(0)
    
    React.useEffect(() => {
        const retrieveDataFromDevice = async () => {
            try {
                const storedData = await AsyncStorage.getItem('user');
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    const specificValue = parsedData.amount; // Access a specific value'
                    console.log('Retrieved data:', parsedData);
                    console.log('Specific value:', specificValue);
                    setAmount(specificValue)
                } else {
                    console.log('No data found in AsyncStorage');
                }
            } catch (error) {
                console.log('Error retrieving data:', error);
            }
        };
        retrieveDataFromDevice();
    }, []);

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