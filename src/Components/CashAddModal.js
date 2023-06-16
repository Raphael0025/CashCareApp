import {Text, Box, Button, Input, Modal } from 'native-base'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../data/color'

const CashAddModal = ({ isOpen, onClose, onCashAdded }) => {

    const [amount, setAmount] = useState('');

    const handleAddCash = async () => {
        try {
          // Retrieve existing user data from AsyncStorage
            const userData = await AsyncStorage.getItem('user');
            const user = JSON.parse(userData);
            // Calculate the new amount by adding the parsed input value to the current amount
            const currentAmount = parseFloat(user.amount);
            const newAmount = currentAmount + parseFloat(amount);
            const updatedUser = { ...user, amount: newAmount };
            // Save the updated user data back to AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            // Clear the input field
            setAmount('');
            // Call the callback function to update the cash amount in the HomeScreen component
            onCashAdded(newAmount);
            // Close the modal
            onClose()
        } catch (error) {
            console.error('Error adding cash:', error);
        }
    };
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Box bg={Colors.widgetBG} w="250" p="5" borderRadius="15" h="200" gap="5">
                <Text fontWeight="800" fontSize="lg" color={Colors.main_light}>Add Cash</Text>
                <Input variant="filled" _focus={{bg: "white"}}
                    placeholder="Enter amount" value={amount}
                    onChangeText={setAmount} keyboardType="numeric"
                    fontSize="lg" fontWeight="700" color={Colors.main_light}
                    />
                <Button bg={Colors.main_dark} onPress={handleAddCash}>Add Cash</Button>
            </Box>
        </Modal>
    )
}

export default CashAddModal