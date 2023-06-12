import React from 'react'
import { MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import {Box, Text, Icon, Divider, HStack, VStack, StatusBar, Pressable} from "native-base";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import HomeScreen from '../Screens/HomeScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import CurrencyScreen from '../Screens/CurrencyScreen'
import LanguageScreen from '../Screens/LanguageScreen'
import CategoriesScreen from '../Screens/CategoriesScreen'
import Time_DateSettingsScreen from '../Screens/Time_DateSettingsScreen'
import AboutScreen from '../Screens/AboutScreen'
import Reminder from '../Screens/Reminder'
import Colors from '../data/color'
import BudgetScreen from '../Screens/BudgetScreen'
import ExpenseScreen from '../Screens/ExpenseScreen'
import Records from '../Screens/Records'

const Drawer = createDrawerNavigator();

const getIconName = (screenName) => {
    switch(screenName){
        case "Home":
            return "home" //Ionicons
        case "Currency":
            return "currency-php" //MaterialCommunityIcons
        case "Language":
            return "md-language" //Ionicons
        case "Categories":
            return "list-alt"//MaterialIcons
        case "Date_and_Time":
            return "date-range" //MaterialIcons
        case "Reminders":
            return "notification-important"//MaterialIcons
        case "Notification":
            return "mark-chat-unread"//MaterialIcons
        case "About":
            return "information"//MaterialCommunityIcons
        case "Profile":
            return "user"
        case "Expense":
            return "hand-coin"
        case "Budget":
            return "piggy-bank"
        case "Record":
            return "exchange"
        default:
            return undefined
    }
}

const getIcon = (screenName) => {
    switch(screenName){
        case "Home":
        case "Language":
            return <Ionicons name={getIconName(screenName)} />
        case "Notification":
        case "Reminders":
        case "Date_and_Time":
        case "Categories":
            return <MaterialIcons name={getIconName(screenName)} />
        case "About":
        case "Currency":
        case "Expense":
        case "Budget":
            return <MaterialCommunityIcons name={getIconName(screenName)} />
        case "Profile":
        case "Record":
            return <FontAwesome name={getIconName(screenName)} />
    }
}

function CustomDrawer(props){
    return (
        <DrawerContentScrollView {...props} safeArea style={{backgroundColor: "#272525"}}>
            <VStack space="6" my="2" mx="1">
                <Box px="4">
                    <Text fontSize="24" mt="1" bold color={Colors.main}>Settings</Text>
                </Box>
                <VStack divider={<Divider />} space="4" >
                    <VStack space="3">
                        <Text fontSize="16" mt="1" bold color={Colors.main}>General</Text>
                        {props.state.routeNames.map((name, index) => (
                            <Pressable key={name} px="5" py="3" rounded="md" bg={index===props.state.index ? Colors.main : "#342F2F50"} onPress={(event) => {props.navigation.navigate(name)}} > 
                                <HStack space="7" alignItems="center">
                                    <Icon color={index===props.state.index ? Colors.main_light : Colors.gray} size="6" as={getIcon(name)} />
                                    <Text fontWeight="500" color={index===props.state.index ? Colors.secondary_txt : Colors.gray}>{name}</Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    )
}

function DrawerNav() {
    return (
    <Box safeArea flex={1}>
        <Drawer.Navigator screenOptions={{headerTitleStyle:{color: "white"}, headerTintColor: Colors.white, headerStyle: {backgroundColor: Colors.bgGradient}}} drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName="Home" >
            <Drawer.Screen name="Profile" component={ProfileScreen} />

            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Budget" component={BudgetScreen} />
            <Drawer.Screen name="Expense" component={ExpenseScreen} />
            <Drawer.Screen name="Record" component={Records} />
            
            <Drawer.Screen name="Currency" component={CurrencyScreen} />
            <Drawer.Screen name="Language" component={LanguageScreen} />
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Date_and_Time" component={Time_DateSettingsScreen} />

            <Drawer.Screen name="Reminders" component={Reminder} />
            <Drawer.Screen name="Notification" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    </Box>
    );
}

export default DrawerNav