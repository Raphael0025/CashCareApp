import React, {useState, useEffect} from 'react'
import { usePermissions, scheduleNotificationAsync, addNotificationReceivedListener} from 'expo-notifications'
import { ToastAndroid  } from 'react-native'
import { Box, Button, Input, Text } from 'native-base'
import Colors from '../data/color'

function Reminder() {
    const [reminderTime, setReminderTime] = useState('');
    //const [switchToggle, setSwitchToggle] = useState(false);

    usePermissions();

    const handleTimeSet = async () => {
        const [hours, minutes] = reminderTime.split(':');
        const date = new Date();
        date.setHours(Number(hours));
        date.setMinutes(Number(minutes));
        date.setSeconds(0);
    
        // Schedule the notification
        await scheduleNotificationAsync({
            content: {
                title: 'Reminder',
                body: 'Record your daily expenses.',
            },
            trigger: {
                hour: date.getHours(),
                minute: date.getMinutes(),
                repeats: true, // Set to true if you want the notification to repeat daily at the specified time
            },
        });
    };

    useEffect(() => {
        // Add listener for incoming notifications
        const subscription = addNotificationReceivedListener(handleNotificationReceived);
        return () => {
          // Clean up the listener on component unmount
            subscription.remove();
        };
    }, []);

    const handleNotificationReceived = (notification) => {
        // Handle the received notification
        console.log('Received notification:', notification);
        // Notify the user or perform any desired action
        // For example, you can use the 'react-native-toast' package to show a toast message
        // toast.show('Reminder: Record your daily expenses.');
        
        // Show a toast message with the notification details
        ToastAndroid.show('Reminder: Record your daily expenses.', ToastAndroid.LONG);
    };
    
    return (
        <Box flex={1} bg={Colors.dark_gray} px="5" py="5" gap="3">
            <Text bold fontSize="xl" color={Colors.white}>Enter Reminder Time (HH:MM):</Text>
            <Input borderRadius="5"  fontSize="md" textAlign="center"
                placeholder="Example: 19:00" value={reminderTime}
                onChangeText={setReminderTime}
            />
            <Button bg={Colors.main} onPress={handleTimeSet}><Text fontSize="md" textTransform="uppercase" bold color={Colors.white} >Set Reminder</Text></Button> 
        </Box>
    )
}

export default Reminder