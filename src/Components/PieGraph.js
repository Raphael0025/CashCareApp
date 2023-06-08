import React from 'react'
import {Box, Text, Pressable} from 'native-base'
import Colors from '../data/color';
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

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

    const data = [
        {
            name: "Food",
            percent: 258000,
            color: Colors.main_dark,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Transpo",
            percent: 258000,
            color: Colors.main_light,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Misc.",
            percent: 258000,
            color: Colors.main_dark,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "House",
            percent: 258000,
            color: Colors.main_light,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        } 
    ];
    return (
        <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingBottom="2" borderRadius="10" w="full" h="xs"  >
            <Text bold color="white" fontSize="16" paddingBottom="2">Budget Overview</Text>
            <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Monthly Budget Pie Chart</Text>
            </Box>
            <PieChart
                data={data}
                width={screenWidth/1.2}
                height={150}
                chartConfig={chartConfig}
                accessor={"percent"}
                backgroundColor={"transparent"}
            />
            <Box paddingTop="3" paddingBottom="3" justifyContent="flex-end">
                <Pressable _pressed={{opacity: 0.2}}>
                    <Text textTransform="uppercase" color={Colors.title_color} bold>View More</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default PieGraph