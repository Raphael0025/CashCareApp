import {NativeBaseProvider, Box, View, StatusBar, Text} from 'native-base'
import config from './src/data/Config'
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import OnboardingScreen from './src/Screens/OnboardingScreen'
import HomeScreen from './src/Screens/HomeScreen'
import CurrencyScreen from './src/Screens/CurrencyScreen'
import Time_DateSettingsScreen from './src/Screens/Time_DateSettingsScreen'
import LanguageScreen from './src/Screens/LanguageScreen'
import TimeSettings from './src/Screens/TimeSettings'
import DateScreen from './src/Screens/DateScreen'
import CategoriesScreen from './src/Screens/CategoriesScreen'
import ProfileScreen from './src/Screens/ProfileScreen'
import StasScreen from './src/Screens/StatsScreen'
import BudgetScreen from './src/Screens/BudgetScreen'
import ExpenseScreen from './src/Screens/ExpenseScreen'
import CreateBudgetScreen from './src/Screens/CreateBudgetScreen'
import CreateExpenseScreen from './src/Screens/CreateExpenseScreen'
import Records from './src/Screens/Records'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNav from './src/Navigation/DrawerNav'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider  config={config}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="OnBoard" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="OnBoard" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} /> 
          <Stack.Screen name="Register" component={RegisterScreen} /> 
          <Stack.Screen name="Profile" component={ProfileScreen} /> 
          <Stack.Screen name="Record" component={Records} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Time_DateSettingsScreen" component={Time_DateSettingsScreen} />
          <Stack.Screen name="Budget" component={BudgetScreen} />
          <Stack.Screen name="Expense" component={ExpenseScreen} />
          <Stack.Screen name="Category" component={CategoriesScreen} />
          <Stack.Screen name="CreateBudget" component={CreateBudgetScreen} />
          <Stack.Screen name="CreateExpense" component={CreateExpenseScreen} />
          <Stack.Screen name="Currency" component={CurrencyScreen} />
          <Stack.Screen name="Date" component={DateScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="Time" component={TimeSettings} />

          <Stack.Screen name="DrawerNav" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

/**
 * <NativeBaseProvider  config={config}>
      <Box flex={1} bg={{
                  linearGradient: {
                    colors: [Colors.bgGradient, Colors.black],
                    start: [1, 0],
                    end: [1, 1]
                  }
                }} alignItems="center" justifyContent="center">
              <Text style={{color: "white"}}>Open up App.js efeto start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
 */
