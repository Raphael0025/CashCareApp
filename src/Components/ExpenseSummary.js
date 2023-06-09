import React from 'react'
import {Box, Image, Text, View, ScrollView, Pressable} from 'native-base'
import Colors from '../data/color';

function ExpenseSummary({navigation}) {

    function numFormat (amount){
        const max = {  maximumFractionDigits: 2   } 
        return Intl.NumberFormat("en-US", max).format(amount)
    }
    const ttl = 65.525

    const [listedData, setListedData] = React.useState([
        {
            title: "Biscuit",
            sub: "Food & Groceries",
            date: "06/30/21",
            amount: "10.58"
        },
        {
            title: "Breakfast",
            sub: "Food & Groceries",
            date: "06/30/21",
            amount: "30.98"
        },
    ])

    React.useEffect(async() => {
        async function retrieveData() {
            const value = await AsyncStorage.getItem('expenseList');
            const data = await JSON.parse(value);
            setListedData({title: data.title, sub: data.sub, date: data.date, amount: data.amount});
        }
        retrieveData();
    },[]);

    return (
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="2xs"  >
            <Text bold color="white" fontSize="16" paddingBottom="2">Expense Report</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="16" w="1/2">Remaining Budget: </Text>
                <Text color={Colors.title_color} fontSize="16" w="1/2" textAlign="right">{numFormat(ttl)}</Text>
            </Box>
                <ScrollView gap="10" nestedScrollEnabled = {true} vertical>
                    {listedData.map((itm) =>{
                    return <Box w="full" flexDirection="row" borderRadius="15" marginBottom="3" borderWidth="1" padding="2" borderColor={Colors.main_dark} >
                                    <Box flexDirection="column" gap="2" paddingLeft="6" >
                                    <Text color="white" fontSize="16" fontWeight="700"  >{itm.title}</Text>
                                    <Text color="#ffffff50" fontSize="12" bold >{itm.sub}</Text>
                                    <Text color="#ffffff75"  fontSize="13" bold >{itm.date}</Text>
                                </Box>
                                
                                <Box w="60%" alignItems="center" justifyContent="center" >
                                    <Text textAlign="center" color="red.400" bold fontSize="16" >Php -{itm.amount}</Text>
                                </Box>
                        </Box>
                    })}
                </ScrollView>
            <Box paddingTop="3" paddingBottom="3" justifyContent="flex-end">
                <Pressable _pressed={{opacity: 0.2}} onPress={() => navigation.navigate('Record', {screen: 'Expense'})}>
                    <Text textTransform="uppercase" color={Colors.title_color} bold>View More</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default ExpenseSummary