import * as React from 'react';
import { Text, Box } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Budget from './Budget'
import Expense from './Expense'

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
    return (
    <NavigationContainer>
        <Tab.Navigator >
            <Tab.Screen  name="Budget" component={Budget} />
            <Tab.Screen  name="Expense" component={Expense} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}