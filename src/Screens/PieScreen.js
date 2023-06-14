import React, {useState, useEffect} from 'react'
import {Box, Text, Pressable} from 'native-base'
import Colors from '../data/color';
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

function PieScreen({navigation}) {
// const screenWidth = Dimensions.get("window").width;
// const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false, // optional
// };

//     const data = [
//         {
//             name: "Food",
//             percent: 250000,
//             color: Colors.main_dark,
//             legendFontColor: "#7F7F7F",
//             legendFontSize: 15
//         },
//         {
//             name: "Transpo",
//             percent: 250000,
//             color: Colors.main_light,
//             legendFontColor: "#7F7F7F",
//             legendFontSize: 15
//         },
//         {
//             name: "Misc.",
//             percent: 250000,
//             color: Colors.main_dark,
//             legendFontColor: "#7F7F7F",
//             legendFontSize: 15
//         },
//         {
//             name: "House",
//             percent: 250000,
//             color: Colors.main_light,
//             legendFontColor: "#7F7F7F",
//             legendFontSize: 15
//         } 
//     ];
    return (
        <Box flex={1} bg={Colors.dark_gray} px="5" py="5">
            <Box bg={Colors.widgetBG} shadow="7" padding="5" paddingBottom="2" borderRadius="10" w="full" h="xs"  >
                <Text bold color="white" fontSize="16" paddingBottom="2">Budget Overview</Text>
                <Box paddingTop="2" paddingBottom="2" flexDirection="row" borderTopWidth="1" borderTopColor={Colors.main_dark} >
                    <Text color="#ffffff50" bold fontSize="12" w="full" textAlign="center" textTransform="uppercase" >Monthly Budget Pie Chart</Text>
                </Box>
                
            </Box>
        </Box>
    )
}

export default PieScreen