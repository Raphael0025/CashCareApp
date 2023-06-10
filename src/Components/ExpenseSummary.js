import React from 'react'
import {Box, Image, Text, View, ScrollView, Pressable} from 'native-base'
import Colors from '../data/color';
import AsyncStorage from "@react-native-async-storage/async-storage";

function ExpenseSummary({navigation}) {
    const [validAmountDataCount, setValidAmountDataCount] = React.useState(0);
    const [remainingBudget, setRemainingBudget] = React.useState(0);

    function numFormat (amount){
        const max = {  maximumFractionDigits: 2   } 
        return Intl.NumberFormat("en-US", max).format(amount)
    }

    const [expenses, setExpense] = React.useState([]);
    const getExpenses = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const expenseKeys = keys.filter((key) => key.startsWith('expenseList:'));
            const expenseData = await AsyncStorage.multiGet(expenseKeys);
    
            const parsedExpense = expenseData.map(([key, value]) => ({
                key,
                expense: JSON.parse(value),
            }));
    
            setExpense(parsedExpense);
            const validAmountDataCount = await countValidAmountData(parsedExpense);
            setRemainingBudget(validAmountDataCount);
            } catch (error) {
            console.log('Error retrieving expense:', error);
            }
      };
    
      React.useEffect(() => {
        getExpenses();
      }, []);

      const countValidAmountData = async (expenses) => {
        try {
          let validDataCount = 0;
    
          expenses.forEach(({ expense }) => {
            if (expense.amount && !isNaN(expense.amount)) {
              validDataCount += Number(expense.amount);
            }
          });
    
          return validDataCount;
        } catch (error) {
          console.log('Error counting valid amount data:', error);
          return 0;
        }
      };
      
      React.useEffect(() => {
        countValidAmountData()
          .then((count) => {
            setValidAmountDataCount(count);
          })
          .catch((error) => {
            console.log('Error counting valid amount data:', error);
            setValidAmountDataCount(0);
          });
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
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="2xs"  >
            <Text bold color="white" fontSize="16" paddingBottom="2">Expense Report</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="16" w="1/2">Total Expenses: </Text>
                <Text color={Colors.title_color} fontSize="16" w="1/2" textAlign="right">{numFormat(remainingBudget)}</Text>
            </Box>
                <ScrollView gap="10" nestedScrollEnabled = {true} vertical>
                    {expenses.length > 0 ? (
                    expenses.map(({ key, expense }) => (
                        <DataHandler key={key} item={expense} />
                    ))
                    ) : (
                    <Text color="white" fontSize="16">
                        No expenses data available.
                    </Text>
                    )}
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