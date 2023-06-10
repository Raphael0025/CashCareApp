import React from 'react';
import { Box, Text, ScrollView } from 'native-base';
import Colors from '../data/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Budget() {
    const [budgets, setBudgets] = React.useState([]);

  const getBudgets = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      const budgetData = await AsyncStorage.multiGet(keys);

      const parsedBudgets = budgetData.map(([key, value]) => ({
        key,
        budget: JSON.parse(value),
      }));

      setBudgets(parsedBudgets);
    } catch (error) {
      console.log('Error retrieving budgets:', error);
    }
  };

  React.useEffect(() => {
    getBudgets();
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
            {budgets.length > 0 ? (
              budgets.map(({ key, budget }) => (
                <DataHandler key={key} item={budget} />
              ))
            ) : (
              <Text color="white" fontSize="16">
                No budget data available.
              </Text>
            )}
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default Budget;