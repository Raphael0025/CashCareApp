import React, { useEffect, useState } from 'react'
import { Box, Text, ScrollView } from 'native-base'
import Colors from '../data/color'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [newDataAdded, setNewDataAdded] = useState(false); // State variable to track new data
  const [remainingExpense, setRemainingExpenses] = useState(0);
  
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
  };

  useEffect(() => {
    getExpenses()
    setNewDataAdded(false) // Reset the flag after rendering new data
  }, [newDataAdded]) // Trigger useEffect when newDataAdded changes

  const DataHandler = ({ item }) => (
    <Box w="full"
      flexDirection="row" borderRadius="15"
      marginBottom="3" borderWidth="1"
      padding="2" borderColor={Colors.main_dark}
    >
      <Box flexDirection="column" gap="2" paddingLeft="6">
        <Text color="white" fontSize="16" fontWeight="700">
          {item.desc}
        </Text>
        <Text color="white" fontSize="12" bold>
          {item.category}
        </Text>
        <Text color="#ffffff75" fontSize="13" bold>
          {item.date}
        </Text>
      </Box>

      <Box w="60%" alignItems="center" justifyContent="center">
        <Text textAlign="center" color="white" bold fontSize="16">
          Php {item.amount}
        </Text>
      </Box>
    </Box>
  );

  return (
    <Box flex={1} bg={Colors.dark_gray}>
      <Box flex={1}>
        <ScrollView flex={1} vertical>
          <Box py="5" px="5">
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <DataHandler key={expense.key} item={expense} />
              ))
            ) : (
              <Text color="white" fontSize="16">
                No expense data available.
              </Text>
            )}
          </Box>
        </ScrollView>
        <Box p="5" w="full" alignItems="center">
          <Box flexDirection="row" bg={Colors.main_dark} w="full" justifyContent="space-evenly" borderRadius="10" px="8">
            <Box w="50%" >
              <Text py="3" bold fontSize="md" color={Colors.main_light}>Total Budget:</Text>
            </Box>
            <Box w="50%" alignItems="flex-end">
              <Text py="3" bold color={Colors.main_light} fontSize="md">Php {numFormat(remainingExpense)}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Expense;