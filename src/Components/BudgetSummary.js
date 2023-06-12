import React, {useState, useEffect} from 'react'
import {Box, Text, ScrollView, Pressable} from 'native-base'
import Colors from '../data/color';
import AsyncStorage from "@react-native-async-storage/async-storage";

function BudgetSummary({navigation}) {
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [budget, setBudget] = useState([]);

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
    
  React.useEffect(() => {
    getBudgets();
  }, []);

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
      <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="2xs"  >
          <Text bold color="white" fontSize="16" paddingBottom="2">Budget Summary</Text>
          <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
              <Text color="#ffffff50" bold fontSize="16" w="1/2">Remaining Budget:{' '}</Text>
              <Text color={Colors.title_color} fontSize="16" w="1/2" textAlign="right">Php {numFormat(remainingBudget)}</Text>
          </Box>
              <ScrollView gap="10" nestedScrollEnabled = {true} vertical>
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
          <Box paddingTop="3" paddingBottom="3" justifyContent="flex-end">
              <Pressable _pressed={{opacity: 0.2}} onPress={() => navigation.navigate('DrawerNav', {screen: 'Record', params: { screen: 'Budget' },})}>
                  <Text textTransform="uppercase" color={Colors.title_color} bold>View More</Text>
              </Pressable>
          </Box>
      </Box>
  )
}

export default BudgetSummary