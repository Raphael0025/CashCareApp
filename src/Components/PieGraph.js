import React, {useState, useEffect} from 'react'
import {Box, Text, Pressable} from 'native-base'
import Colors from '../data/color';
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function PieGraph() {
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
};

const [budgetData, setBudgetData] = useState([
    { name: 'Week 1', percent: 30, color: Colors.main_dark, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Week 2', percent: 40, color: Colors.main_light, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Week 3', percent: 10, color: Colors.main_dark, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Week 4', percent: 30, color: Colors.main_light, legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const budgetList = await AsyncStorage.getItem('budgetList');
      if (budgetList) {
        const budgets = JSON.parse(budgetList);
        const totalBudget = budgets.reduce((total, budget) => total + budget.amount, 0);
        const budgetPerWeek = totalBudget / 4;
        const updatedBudgetData = budgetData.map((budget, index) => ({
          ...budget,
          percent: budgetPerWeek,
          name: `Week ${index + 1}`,
        }));
        setBudgetData(updatedBudgetData);
      }
    } catch (error) {
      console.error('Error fetching budget data:', error);
    }
  };
    return (
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingBottom="2" borderRadius="10" w="full" h="xs"  >
            <Text bold color="white" fontSize="16" paddingBottom="2">Budget Overview</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Weekly Budget Pie Chart</Text>
            </Box>
            <PieChart
                data={budgetData}
                width={screenWidth/1.2}
                height={150}
                chartConfig={chartConfig}
                accessor={"percent"}
                backgroundColor={"transparent"}
            />
        </Box>
    )
}

export default PieGraph