import * as React from 'react';
import { Text, Box } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Budget from './Budget'
import Expense from './Expense'

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:'white', tabBarIndicatorStyle: { backgroundColor: 'white', height: 2 },tabBarStyle: {backgroundColor: "#52A099"}}}>
            <Tab.Screen name="Budget" component={Budget} />
            <Tab.Screen  name="Expense" component={Expense} />
        </Tab.Navigator>
    );
}