import React, { useEffect, useState } from 'react'
import { Box, Text, Select, CheckIcon, Input, Button } from 'native-base';
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CreateBudgetScreen({ navigation }) {
  const listC = [
    {
      key: '1',
      category: 'Food & Groceries',
    },
    {
      key: '2',
      category: 'Housing & Utilities',
    },
    {
      key: '3',
      category: 'Transportation',
    },
    {
      key: '4',
      category: 'Personal & Health',
    },
    {
      key: '5',
      category: 'Entertainment',
    },
    {
      key: '6',
      category: 'Study & Training',
    },
    {
      key: '7',
      category: 'Miscellaneous',
    },
    {
      key: '8',
      category: 'Others',
    },
    {
      key: '9',
      category: 'Customize',
    },
  ];

  const [budget, setBudget] = useState([])

  function generateBudgetKey() {
    return Date.now().toString(); // Generate a unique key based on the current timestamp
  }

  const handleUpdateData = async () => {
    if (!budget.desc || !budget.duration || !budget.date || budget.amount === 0 || !budget.category) {
      alert('Please fill in all the fields.'); // Display an error message if any input is missing
      return; // Exit the function if any input is missing
    }

    try {
      const newBudgetKey = generateBudgetKey();
      const storedData = await AsyncStorage.getItem('budgetList');
      if (storedData) {
        const existingData = JSON.parse(storedData);
        existingData[newBudgetKey] = budget; // Append the new budget object
        await AsyncStorage.setItem('budgetList', JSON.stringify(existingData));
        alert('Data stored successfully');
      } else {
        // If no existing data found, store the new budget object as an object with a unique key
        const newKey = Date.now().toString(); // Example: using a timestamp as the key
        const newData = {
          [newKey]: budget,
        };
        await AsyncStorage.setItem('budgetList', JSON.stringify(newData));
        alert('Data stored successfully');
      }
      navigation.navigate('DrawerNav', {screen: 'Record', params: { screen: 'Budget' },});
    } catch (error) {
      console.log('Error updating data:', error);
      alert('An error occurred');
    }
  };

  const getBudget = async () => {
    try {
      const storedData = await AsyncStorage.getItem('budgetList');
      if (storedData) {
        const budgetData = JSON.parse(storedData);
        const parsedBudgets = Object.entries(budgetData).map(([key, value]) => ({
          key,
          budget: value, // Make sure the budget object has the necessary properties
        }));
        setBudget(parsedBudgets);
      } else {
        setBudget([]);
      }
    } catch (error) {
      console.log('Error retrieving budgets:', error);
    }
  };

  return (
    <Box flex={1} bg={Colors.dark_gray}>
      <TopHomeBar screenName="Create Budget" />
      <Box flex={1} padding="5">
        <Box gap="16">
          <Box>
            <Text color={Colors.main_light} bold fontSize="lg">Description</Text>
            <Input variant="underlined" borderBottomWidth="1.5"
              fontSize="md" _focus={{ bg: Colors.widgetBG }}
              color={Colors.secondary_txt} borderBottomColor={Colors.main_light}
              value={budget.desc}
              onChangeText={(desc) => {
                setBudget((prevState) => ({ ...budget, desc }));
              }}
            />
          </Box>
          <Box flexDirection="row" gap="5">
            <Box w="45%" gap="1.5">
              <Text bold fontSize="lg" color={Colors.main_light}>Duration</Text>
              <Select color={Colors.secondary_txt} fontSize="md"
                borderColor={Colors.main_light} selectedValue={budget.duration}
                accessibilityLabel="Select" placeholder="Select"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1} onValueChange={(itemValue) => setBudget({ ...budget, duration: itemValue })}
              >
                <Select.Item label="Daily" value="Daily" />
                <Select.Item label="Weekly" value="Weekly" />
                <Select.Item label="Monthly" value="Monthly" />
              </Select>
            </Box>
            <Box w="45%" gap="2">
              <Text bold fontSize="lg" color={Colors.main_light}>Date</Text>
              <Input borderWidth="1.5" placeholder="MM/DD/YYYY"
                fontSize="md" _focus={{ bg: Colors.widgetBG }}
                textAlign="center" color={Colors.secondary_txt}
                borderColor={Colors.main_light} value={budget.date}
                onChangeText={(date) => {
                  setBudget({ ...budget, date });
                }}
              />
            </Box>
          </Box>
          <Box gap="3">
            <Text bold fontSize="lg" color={Colors.main_light}>Amount</Text>
            <Box flexDirection="row" gap="2" alignItems="center">
              <Text textAlign="right" bold color={Colors.gray} w="20%" fontSize="xl">PHP</Text>
              <Input keyboardType="numeric" w="80%"
                borderWidth="1.5" placeholder="0.00"
                fontSize="md" _focus={{ bg: Colors.widgetBG }}
                color={Colors.secondary_txt} borderColor={Colors.main_light}
                value={budget.amount !== undefined ? budget.amount.toString() : ''}
                onChangeText={(amount) => {
                  setBudget((prevState) => ({ ...budget, amount: parseFloat(amount) }))
                }}
              />
            </Box>
          </Box>
          <Box gap="3">
            <Text bold fontSize="lg" color={Colors.main_light}> Category</Text>
            <Select color={Colors.secondary_txt} fontSize="md"
              borderColor={Colors.main_light} selectedValue={budget.category}
              accessibilityLabel="Select" placeholder="Select"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1} onValueChange={(itemValue) => setBudget({ ...budget, category: itemValue })}
            >
              {listC.map((key) => {
                return <Select.Item key={key.key} label={key.category} value={key.category} />;
              })}
            </Select>
          </Box>
        </Box>
        <Box marginTop="12" gap="5" flexDirection="row">
          <Button onPress={() => navigation.navigate('DrawerNav', { screen: 'Home' })} w="45%" bg="danger.600">Cancel</Button>
          <Button w="45%" bg="primary.600" onPress={handleUpdateData}>Create</Button>
        </Box>
      </Box>
    </Box>
  );
}
export default CreateBudgetScreen;