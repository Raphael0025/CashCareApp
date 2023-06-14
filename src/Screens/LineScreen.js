import React, { useEffect, useState } from 'react';
import { Box, Text } from 'native-base';
import Colors from '../data/color';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LineScreen() {
    // const screenWidth = Dimensions.get('window').width;
    // const chartConfig = {
    //     backgroundGradientFrom: '#1E2923',
    //     backgroundGradientFromOpacity: 0,
    //     backgroundGradientTo: '#08130D',
    //     backgroundGradientToOpacity: 0.5,
    //     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //     strokeWidth: 2, // optional, default 3
    // };

    // const [expenseData, setExpenseData] = useState([]);

    // useEffect(() => {
    //   fetchExpenseData();
    // }, []);

    // const fetchExpenseData = async () => {
    //     try {
    //       const expenseList = await AsyncStorage.getItem('expenseList');
    //       if (expenseList) {
    //         const parsedExpenseList = JSON.parse(expenseList);
    //         const weeklyExpenses = computeWeeklyExpenses(parsedExpenseList);
    //         setExpenseData(weeklyExpenses);
    //       } else {
    //         setExpenseData([]);
    //       }
    //     } catch (error) {
    //       console.log('Error retrieving expense data:', error);
    //     }
    // };

    // const computeWeeklyExpenses = (expenseList) => {
    //     const weeklyExpenses = Array(4).fill(0); // Assuming there are 4 weeks in a month
    //     if (Array.isArray(expenseList)) {
    //       expenseList.forEach((expense) => {
    //         const weekIndex = expense.week - 1; // Assuming expense.week represents the week number
    //         weeklyExpenses[weekIndex] += expense.amount;
    //       });
    //     }
    //     return weeklyExpenses;
    //   };

    // const data = {
    //     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    //     datasets: [
    //     {
    //         data: expenseData,
    //         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    //         strokeWidth: 2,
    //     },
    //     ],
    //     legend: ['Weekly Expense'],
    // };

    return (
        <Box flex={1} px="5" py="5" bg={Colors.dark_gray}>
            <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full"   >
                <Text bold color="white" fontSize="16" paddingBottom="2">Expense Analysis</Text>
                <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                    <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Balance Line Graph</Text>
                </Box>
                {/* <LineChart
                    data={data}
                    width={screenWidth/1.25}
                    height={250}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                    /> */}
            </Box>
        </Box>
        
    )
}

export default LineScreen