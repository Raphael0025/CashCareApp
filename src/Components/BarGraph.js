import React, {useState, useEffect} from 'react'
import {Box, Text, Pressable} from 'native-base'
import Colors from '../data/color';
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

function BarGraph() {
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
            const expenseList = JSON.stringify(sampleExpenseData);
            const parsedExpenseList = JSON.parse(expenseList);
            computeWeeklyExpenses(parsedExpenseList);
          } else {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            const weeksInMonth = getWeeksInMonth(currentYear, currentMonth);
            const weeklyExpenses = Array(weeksInMonth).fill(0);
            setExpenseData(weeklyExpenses);
          }
        } catch (error) {
          console.log('Error retrieving expense data:', error);
        }
      };
    
      const computeWeeklyExpenses = (expenseList) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const weeksInMonth = getWeeksInMonth(currentYear, currentMonth);
        const weeklyExpenses = Array(weeksInMonth).fill(0);
    
        if (Array.isArray(expenseList)) {
          expenseList.forEach((expense) => {
            const expenseDate = new Date(expense.date);
            if (expenseDate.getFullYear() === currentYear && expenseDate.getMonth() === currentMonth) {
              const weekIndex = getWeekIndex(expenseDate);
              weeklyExpenses[weekIndex] += expense.amount;
            }
          });
        }
    
        setExpenseData(weeklyExpenses);
      };
    
      const getWeeksInMonth = (year, month) => {
        const firstOfMonth = new Date(year, month, 1);
        const lastOfMonth = new Date(year, month + 1, 0);
        const numberOfDays = lastOfMonth.getDate();
        const firstDayOfWeek = firstOfMonth.getDay();
        const lastDayOfWeek = lastOfMonth.getDay();
    
        // Adjust the first and last day of the week based on the starting day of the week (assuming Sunday is the starting day)
        const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
        const adjustedLastDayOfWeek = lastDayOfWeek === 0 ? 7 : lastDayOfWeek;
    
        const daysInFirstWeek = 7 - (adjustedFirstDayOfWeek - 1);
        const daysInLastWeek = adjustedLastDayOfWeek;
        const completeWeeks = Math.floor((numberOfDays - daysInFirstWeek - daysInLastWeek) / 7);
        const totalWeeks = completeWeeks + 2; // Add 2 for the first and last partial weeks
    
        return totalWeeks;
      };
    
      const getWeekIndex = (date) => {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
    
        const weekOffset = Math.floor((date.getDate() - adjustedFirstDayOfWeek) / 7);
        return weekOffset;
      };
      const sampleExpenseData = [
        { date: "2023-06-01", amount: 100 },
        { date: "2023-06-02", amount: 150 },
        { date: "2023-06-10", amount: 80 },
        { date: "2023-06-15", amount: 200 },
        { date: "2023-06-20", amount: 120 },
        { date: "2023-06-25", amount: 90 },
      ];
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            data: expenseData,
        }],
    };

    return (
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="xs" >
            <Text bold color="white" fontSize="16" paddingBottom="2">Expense Insights</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Weekly Expense Bar Graph</Text>
            </Box>
            <BarChart
                data={data}
                width={screenWidth/1.26}
                height={200}
                chartConfig={chartConfig}
                verticalLabelRotation={0}
                />
        </Box>
    )
}

export default BarGraph