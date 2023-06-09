import React from 'react'
import {Box, Image, Text, View, ScrollView, Pressable} from 'native-base'
import Colors from '../data/color';
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

function BarGraph({navigation}) {
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
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
            data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    return (
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingTop="2" paddingBottom="2" borderRadius="10" w="full" h="xs" >
            <Text bold color="white" fontSize="16" paddingBottom="2">Expense Insights</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Monthly Expense Bar Graph</Text>
            </Box>
            <BarChart
                data={data}
                width={screenWidth/1.26}
                height={200}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                />
            <Box paddingTop="3" paddingBottom="3" justifyContent="flex-end">
                <Pressable onPress={() => navigation.navigate('Stat', {screen: 'Bar'})} _pressed={{opacity: 0.2}}>
                    <Text textTransform="uppercase" color={Colors.title_color} bold>View More</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default BarGraph