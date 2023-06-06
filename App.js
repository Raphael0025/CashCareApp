import {NativeBaseProvider, Box, View, Text} from 'native-base'
import config from './src/data/Config'
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

export default function App() {
  return (
    <NativeBaseProvider  config={config}>
      <ProfileScreen />
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
