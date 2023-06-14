import {NativeBaseProvider, Box, View, StatusBar, Text} from 'native-base'
import config from './src/data/Config'
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import OnboardingScreen from './src/Screens/OnboardingScreen'

import TimeSettings from './src/Screens/TimeSettings'
import DateScreen from './src/Screens/DateScreen'

import HomeScreen from './src/Screens/HomeScreen'
import StasScreen from './src/Screens/StatsScreen'
import BudgetScreen from './src/Screens/BudgetScreen'
import ExpenseScreen from './src/Screens/ExpenseScreen'
import CreateBudgetScreen from './src/Screens/CreateBudgetScreen'
import CreateExpenseScreen from './src/Screens/CreateExpenseScreen'
import Records from './src/Screens/Records'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNav from './src/Navigation/DrawerNav'
import TopTabNav from './src/Navigation/TopTabNav'
import ForgotPassword from './src/Screens/ForgotPasswordScreen'

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
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Register" component={RegisterScreen} /> 
          <Stack.Screen name="Record" component={Records} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Budget" component={BudgetScreen} />
          <Stack.Screen name="Expense" component={ExpenseScreen} />
          <Stack.Screen name="CreateBudget" component={CreateBudgetScreen} />
          <Stack.Screen name="CreateExpense" component={CreateExpenseScreen} />
          <Stack.Screen name="Date" component={DateScreen} />
          <Stack.Screen name="Time" component={TimeSettings} />
          <Stack.Screen name="Stat" component={StasScreen} />
          <Stack.Screen name="topNav" component={TopTabNav} />
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
