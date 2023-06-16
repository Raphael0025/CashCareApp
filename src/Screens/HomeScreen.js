import React from 'react'
import {Box, Text, ScrollView, IconButton} from 'native-base'
import Colors from '../data/color';
import Ledger from '../Components/Ledger'
import BudgetSummary from '../Components/BudgetSummary'
import ExpenseSummary from '../Components/ExpenseSummary'
import PieGraph from '../Components/PieGraph'
import BarGraph from '../Components/BarGraph'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from '@expo/vector-icons'
import CashAddModal from '../Components/CashAddModal'
import ToastComp from '../Components/ToastComp';
import ToastAmount from '../Components/ToastAmount';

function HomeScreen({navigation}) {
    const [amount, setAmount] = React.useState(0)
    const [isCashAddModalOpen, setCashAddModalOpen] = React.useState(false)
    const [remainingBudget, setRemainingBudget] = React.useState(0)
    const [remainingExpenses, setRemainingExpenses] = React.useState(0)
    const [showToast, setShowToast] = React.useState(false);

    React.useEffect(() => {
        const retrieveDataFromDevice = async () => {
            try {
                const storedData = await AsyncStorage.getItem('user');
                if (storedData) {
                const parsedData = JSON.parse(storedData);
                const specificValue = parseFloat(parsedData.amount) || 0;
                console.log('Retrieved data:', parsedData);
                console.log('Specific value:', specificValue);
                setAmount(specificValue);
                } else {
                console.log('No data found in AsyncStorage');
                }
            } catch (error) {
                console.log('Error retrieving data:', error);
            }
        };
        retrieveDataFromDevice();
    }, []);

    const handleOpenCashAddModal = () => {
        setCashAddModalOpen(true)
    };
    
    const handleCloseCashAddModal = () => {
        setCashAddModalOpen(false)
    };

    const getExpenses = async () => {
        try {
          const storedData = await AsyncStorage.getItem('expenseList');
          if (storedData) {
            const expenseData = JSON.parse(storedData);
            const parsedExpense = Object.entries(expenseData).map(([key, value]) => ({
              key, ...value,
            }));
            let remainingExpense = 0;
            parsedExpense.forEach((expenses) => {
              if (expenses.amount && !isNaN(expenses.amount)) {
                remainingExpense += Number(expenses.amount);
              }
            });
    
            setRemainingExpenses(remainingExpense);
          } else {
            setRemainingExpenses(0);
          }
        } catch (error) {
          console.log('Error retrieving expenses:', error);
        }
    }

    const getBudgets = async () => {
        try {
          const storedData = await AsyncStorage.getItem('budgetList');
          if (storedData) {
            const budgetData = JSON.parse(storedData);
            const parsedBudgets = Object.entries(budgetData).map(([key, value]) => ({
              key, ...value,
            }));
            let remainingBudget = 0;
            parsedBudgets.forEach((budget) => {
              if (budget.amount && !isNaN(budget.amount)) {
                remainingBudget += Number(budget.amount);
              }
            });
            setRemainingBudget(remainingBudget);
          } else {
            setRemainingBudget(0);
          }
        } catch (error) {
          console.log('Error retrieving budgets:', error);
        }
    };

    const showBudgetWarning = () => {
        if (remainingExpenses !==0 && remainingBudget !== 0 && remainingExpenses > remainingBudget * 0.85) {
            setShowToast(true);
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
        setShowToast(false);
    };

    React.useEffect(() => {
        const timer = setTimeout(showBudgetWarning, 3000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [remainingExpenses, remainingBudget]);

    const handleCashAdded = (newAmount) => {
        setAmount(newAmount);
    };
    
    React.useEffect(() => {
        showBudgetWarning()
        getExpenses()
        getBudgets()
    }, [])

    return (
        <Box flex={1} bg={Colors.main_dark}  >
            <ScrollView nestedScrollEnabled = {true}>
                <Box flex={1} paddingBottom="62" >
                    <Box flex={1} justifyContent="flex-start" padding="5" >
                        <Text fontWeight="bold" fontSize="20" color={Colors.title_color}>Ledger</Text>
                        <Box flexDirection="row" gap="3" alignItems="flex-start" w="100%" >
                                <Ledger price={amount}/>
                            <Box alignItems="flex-start" w="10%" h="full" justifyContent="center">
                                <IconButton onPress={handleOpenCashAddModal} borderRadius="full" bg={Colors.main_light} variant="solid" size="36" w="20" _icon={{
                                    as: MaterialIcons,
                                    name: "add",
                                    size: "2xl"
                                }}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex={1} alignItems="flex-start" gap="10" padding="5" paddingTop="0" >
                        <BudgetSummary navigation={navigation} />
                        <ExpenseSummary navigation={navigation}  />
                        <PieGraph  />
                        <BarGraph  />  
                    </Box>
                </Box>
            </ScrollView>
            {isCashAddModalOpen && (
                <CashAddModal isOpen={isCashAddModalOpen} onClose={handleCloseCashAddModal} onCashAdded={handleCashAdded} />
            )}
            {showToast && <ToastComp onClose={() => setShowToast(false)} />}    
        </Box>
    )
}

export default HomeScreen