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