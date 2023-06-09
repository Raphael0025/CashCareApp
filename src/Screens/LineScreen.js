import React from 'react'
import { Box, Text } from 'native-base'
import Colors from '../data/color'
import LineGraph from '../Components/LineGraph'
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

function LineScreen() {
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

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
        ],
        legend: ["Period"] // optional
    };

    return (
        <Box flex={1} px="5" py="5" bg={Colors.dark_gray}>
            <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full"   >
                <Text bold color="white" fontSize="16" paddingBottom="2">Expense Analysis</Text>
                <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                    <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Balance Line Graph</Text>
                </Box>
                <LineChart
                    data={data}
                    width={screenWidth/1.25}
                    height={250}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                    />
            </Box>
        </Box>
        
    )
}

export default LineScreen