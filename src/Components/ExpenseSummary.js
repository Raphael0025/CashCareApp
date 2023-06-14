import React, { useState, useEffect } from 'react'
import {Box, Text, ScrollView, Pressable} from 'native-base'
import Colors from '../data/color';
import AsyncStorage from "@react-native-async-storage/async-storage";

function ExpenseSummary({navigation}) {
  const [remainingExpenses, setRemainingExpenses] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newDataAdded, setNewDataAdded] = useState(false); // State variable to track new data

    function numFormat (amount){
        const max = {  maximumFractionDigits: 2   } 
        return Intl.NumberFormat("en-US", max).format(amount)
    }

  const getExpenses = async () => {
    try {
      const storedData = await AsyncStorage.getItem('expenseList');
      if (storedData) {
        const expenseData = JSON.parse(storedData);
        const parsedExpense = Object.entries(expenseData).map(([key, value]) => ({
          key, ...value,
        }));
        let remainingExpense = 0;
        parsedExpense.forEach((expenses) => {
          if (expenses.amount && !isNaN(expenses.amount)) {
            remainingExpense += Number(expenses.amount);
          }
        });

        setExpenses(parsedExpense);
        setRemainingExpenses(remainingExpense);
      } else {
        setExpenses([])
        setRemainingExpenses(0);
      }
    } catch (error) {
      console.log('Error retrieving expenses:', error);
    }
  }
    
  useEffect(() => {
    getExpenses()
    setNewDataAdded(false) // Reset the flag after rendering new data
  }, [newDataAdded])

  const DataHandler = ({ item }) => (
    <Box w="full" flexDirection="row"
      borderRadius="15" marginBottom="3"
      borderWidth="1" padding="2"
      borderColor={Colors.main_dark}
    >
      <Box flexDirection="column" gap="2" paddingLeft="6">
        <Text color="white" fontSize="16" fontWeight="700">{item.desc}</Text>
        <Text color="white" fontSize="12" bold>{item.category}</Text>
        <Text color="#ffffff75" fontSize="13" bold>{item.date}</Text>
      </Box>
      <Box w="60%" alignItems="center" justifyContent="center">
        <Text textAlign="center" color="white" bold fontSize="16">Php {item.amount}</Text>
      </Box>
    </Box>
  );

  return (
    <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="2xs"  >
      <Text bold color="white" fontSize="16" paddingBottom="2">Expense Report</Text>
      <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
          <Text color="#ffffff50" bold fontSize="16" w="1/2">Total Expenses: </Text>
          <Text color={Colors.title_color} fontSize="16" w="1/2" textAlign="right">Php {numFormat(remainingExpenses)}</Text>
      </Box>
      <ScrollView gap="10" nestedScrollEnabled = {true} vertical>
          {expenses.length > 0 ? (expenses.map((expense) => (
              <DataHandler key={expense.key} item={expense} />
          ))
          ) : (
            <Text color="white" fontSize="16">No expenses data available.</Text>
          )}
      </ScrollView>
      <Box paddingTop="3" paddingBottom="3" justifyContent="flex-end">
      <Pressable _pressed={{opacity: 0.2}} onPress={() => navigation.navigate('DrawerNav', {screen: 'Record', params: { screen: 'Expense' },})}>
            <Text textTransform="uppercase" color={Colors.title_color} bold>View More</Text>
        </Pressable>
      </Box>
    </Box>
  )
}
export default ExpenseSummary