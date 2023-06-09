import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Fab, Select, Button} from 'native-base'
import Colors from '../data/color';

function AboutScreen() {
    return (
        <Box flex={1} px="5" pt="50" w="full" alignItems="center" justifyContent="flex-start" bg={Colors.dark_gray}>
            <Image alt="logo" w="100%" h="30%" source={require('../../assets/logo.png')} />
            <Box>
            <Text textAlign="center" fontSize="16" color="white">Cash Care is an Android-based budgeting and expense tracker mobile application which enables users to better manage their expenses, create budgets, and monitor their developments toward their intended objectives and goals. Users can learn how to handle their income and expenses by using the application's integrated budgeting and expense platform.</Text>
            </Box>
        </Box>
    )
}

export default AboutScreen