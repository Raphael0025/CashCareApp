import React from 'react'
import {Box, Image, Text, View, ScrollView, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import Ledger from '../Components/Ledger'
import BudgetSummary from '../Components/BudgetSummary'
import ExpenseSummary from '../Components/ExpenseSummary'
import PieGraph from '../Components/PieGraph'
import LineGraph from '../Components/LineGraph'
import BarGraph from '../Components/BarGraph'


function HomeScreen() {

    return (
        <Box flex={1} bg={Colors.main_dark}  >
            <TopHomeBar />
            <ScrollView nestedScrollEnabled = {true}>
                <Box flex={1} paddingBottom="62" >
                    <Box flex={1} justifyContent="flex-start" padding="5" >
                        <Text fontWeight="bold" fontSize="20" color={Colors.title_color}>Ledger</Text>
                        <Ledger price={"501.05"}/>
                    </Box>
                    <Box flex={1} alignItems="flex-start" gap="10" padding="5" paddingTop="0" >
                        <BudgetSummary />
                        <ExpenseSummary />
                        <PieGraph />
                        <LineGraph />
                        <BarGraph />
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default HomeScreen