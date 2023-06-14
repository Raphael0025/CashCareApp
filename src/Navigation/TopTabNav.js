import * as React from 'react';
import { Text, Box } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PieScreen from '../Screens/PieScreen'
import BarScreen from '../Screens/BarScreen'
import LineScreen from '../Screens/LineScreen'

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav() {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:'white', tabBarIndicatorStyle: { backgroundColor: 'white', height: 2 },tabBarStyle: {backgroundColor: "#52A099"}}}>
            {/* <Tab.Screen name="Line" component={LineScreen} />
            <Tab.Screen  name="Bar" component={BarScreen} />
            <Tab.Screen  name="Pie" component={PieScreen} /> */}
        </Tab.Navigator>
    );
}