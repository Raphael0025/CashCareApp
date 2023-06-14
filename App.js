import React, {useCallback, useEffect} from 'react'
import {NativeBaseProvider, Box, View, StatusBar, Text} from 'native-base'
import {ImageBackground} from 'react-native'
import config from './src/data/Config'
import {NavigationContainer, useNavigation } from '@react-navigation/native'
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import OnboardingScreen from './src/Screens/OnboardingScreen'

import TimeSettings from './src/Screens/TimeSettings'
import DateScreen from './src/Screens/DateScreen'

import HomeScreen from './src/Screens/HomeScreen'
import BudgetScreen from './src/Screens/BudgetScreen'
import ExpenseScreen from './src/Screens/ExpenseScreen'
import CreateBudgetScreen from './src/Screens/CreateBudgetScreen'
import CreateExpenseScreen from './src/Screens/CreateExpenseScreen'
import Records from './src/Screens/Records'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNav from './src/Navigation/DrawerNav'
import ForgotPassword from './src/Screens/ForgotPasswordScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider  config={config}>
        <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
          <Stack.Screen name="DrawerNav" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

export function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
        if (onboardingStatus === null) {
          // User is new, show onboarding screen
          await AsyncStorage.setItem('onboardingStatus', 'completed');
          navigateToOnboarding();
        } else {
          // User has already completed onboarding, redirect to login
          navigateToLogin();
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        navigateToLogin(); // In case of error, navigate to login as a fallback
      }
    };

    const navigateToOnboarding = () => {
      navigation.navigate('OnBoard');
    };

    const navigateToLogin = () => {
      navigation.navigate('Login');
    };

    setTimeout(() => {
      checkOnboardingStatus();
    }, 10000); // Delay the navigation to give time for the splash screen to display
  }, []);

  return <ImageBackground style={{ flex: 1, backgroundColor: '#233A3A' }} source={require('./assets/splash.gif')} />;
}