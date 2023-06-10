import React from 'react';
import { Box, Text, ScrollView } from 'native-base';
import Colors from '../data/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Expense() {
    const [expenses, setExpense] = React.useState([]);

  const getExpense = async () => {
        try {
        const keys = await AsyncStorage.getAllKeys();
        const expenseKeys = keys.filter((key) => key.startsWith('expenseList:'));
        const expenseData = await AsyncStorage.multiGet(expenseKeys);

        const parsedExpense = expenseData.map(([key, value]) => ({
            key,
            expense: JSON.parse(value),
        }));

        setExpense(parsedExpense);
        } catch (error) {
        console.log('Error retrieving expense:', error);
        }
    };

  React.useEffect(() => {
    getExpense();
  }, []);

  const DataHandler = ({ item }) => (
    <Box
      w="full"
      flexDirection="row"
      borderRadius="15"
      marginBottom="3"
      borderWidth="1"
      padding="2"
      borderColor={Colors.main_dark}
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
                expenses.map(({ key, expense }) => (
                <DataHandler key={key} item={expense} />
              ))
            ) : (
              <Text color="white" fontSize="16">
                No expense data available.
              </Text>
            )}
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default Expense;