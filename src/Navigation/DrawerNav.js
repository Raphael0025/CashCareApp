import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Box} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator,} from "@react-navigation/drawer";
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
    <Box safeArea flex={1}>
        <Drawer.Navigator initialRouteName="Login" bg="red.500" screenOptions={{
            headerShown: true,
            
        }}>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    </Box>
    );
}

export default DrawerNav