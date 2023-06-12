import React, { useEffect, useState } from 'react'
import {Box, Text} from 'native-base'
import Colors from '../data/color'
import {BarChart} from "react-native-chart-kit"
import { Dimensions } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

function BarScreen() {
    const screenWidth = Dimensions.get("window").width;
    const [expenseData, setExpenseData] = useState([]);
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.8,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        formatYLabel: (value) => `₱${value}`,
    };

    useEffect(() => {
        fetchExpenseData();
    }, []);

    const fetchExpenseData = async () => {
        try {
            const expenseList = await AsyncStorage.getItem('expenseList');
            if (expenseList) {
                const parsedExpenseList = JSON.parse(expenseList);
                computeMonthlyExpenses(parsedExpenseList);
            } else { // No expense data available
                setExpenseData([0, 0, 0, 0, 0, 0]);
            }
        } catch (error) {
            console.log('Error retrieving expense data:', error);
        }
    };

    const computeMonthlyExpenses = (expenseList) => {
        const currentYear = new Date().getFullYear();
        const monthlyExpenses = Array(12).fill(0);
    
        if (Array.isArray(expenseList)) { // Check if expenseList is an array
            expenseList.forEach((expense) => {
                const expenseDate = new Date(expense.date);
                if (expenseDate.getFullYear() === currentYear) {
                    const monthIndex = expenseDate.getMonth();
                    monthlyExpenses[monthIndex] += expense.amount;
                }
            });
        }
        setExpenseData(monthlyExpenses);    
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: expenseData,
        },],
    };

    return (
        <Box flex={1} bg={Colors.dark_gray} px="5" py="5">
            <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="xs" >
                <Text bold color="white" fontSize="16" paddingBottom="2">Expense Insights</Text>
                <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                    <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Monthly Expense Bar Graph</Text>
                </Box>
                <BarChart
                    data={data}
                    width={screenWidth/1.26}
                    height={200}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    />
            </Box>
        </Box>
    )
}

export default BarScreen