import React, {useState, useEffect} from 'react';
import { Box, Text, ScrollView } from 'native-base';
import Colors from '../data/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Budget() {
  const [budget, setBudget] = useState([]);
  const [newDataAdded, setNewDataAdded] = useState(false); // State variable to track new data
  const [remainingBudget, setRemainingBudget] = useState(0);

  function numFormat (amount){
    const max = {  maximumFractionDigits: 2   } 
    return Intl.NumberFormat("en-US", max).format(amount)
  }

  const getBudgets = async () => {
    try {
      const storedData = await AsyncStorage.getItem('budgetList');
      if (storedData) {
        const budgetData = JSON.parse(storedData);
        const parsedBudgets = Object.entries(budgetData).map(([key, value]) => ({
          key, ...value,
        }));
        let remainingBudget = 0;
        parsedBudgets.forEach((budget) => {
          if (budget.amount && !isNaN(budget.amount)) {
            remainingBudget += Number(budget.amount);
          }
        });

        setBudget(parsedBudgets);
        setRemainingBudget(remainingBudget);
      } else {
        setBudget([])
        setRemainingBudget(0);
      }
    } catch (error) {
      console.log('Error retrieving budgets:', error);
    }
  };

  useEffect(() => {
    getBudgets()
    setNewDataAdded(false) // Reset the flag after rendering new data
  }, [newDataAdded]) // Trigger useEffect when newDataAdded changes

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
            {budget.length > 0 ? (
              budget.map(( budget ) => (
                <DataHandler key={budget.key} item={budget} />
              ))
            ) : (
              <Text color="white" fontSize="16">
                No budget data available.
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
              <Text py="3" bold color={Colors.main_light} fontSize="md">Php {numFormat(remainingBudget)}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Budget;