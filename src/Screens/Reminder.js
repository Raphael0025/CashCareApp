import React, {useState, useEffect} from 'react'
import { usePermissions, scheduleNotificationAsync, addNotificationReceivedListener} from 'expo-notifications'
import { Box, Button, Input, Text } from 'native-base'
import Colors from '../data/color'
import Toast from 'react-native-toast-message';

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

        alert("Reminder has been set!")
    };

    useEffect(() => {
        // Add listener for incoming notifications
        const subscription = addNotificationReceivedListener(handleNotificationReceived);
        return () => {
          // Clean up the listener on component unmount
            subscription.remove();
        };
    }, []);

    const showToastMessage = (message) => {
        Toast.show({
            type: 'info',
            position: 'top',
            text1: message,
            visibilityTime: 3000,
        });
    };

    const handleNotificationReceived = (notification) => {
        console.log('Received notification:', notification);
    
        // Show a toast message with the notification details
        showToastMessage('Reminder: Record your daily expenses.');
    };
    
    return (
        <Box flex={1} bg={Colors.dark_gray} px="5" py="5" gap="3">
            <Text bold fontSize="xl" color={Colors.white}>Enter Reminder Time (HH:MM):</Text>
            <Input borderRadius="5" color={Colors.main_light} fontSize="md" textAlign="center"
                placeholder="Example: 19:00" value={reminderTime}
                onChangeText={setReminderTime}
            />
            <Button bg={Colors.main} onPress={handleTimeSet}><Text fontSize="md" textTransform="uppercase" bold color={Colors.white} >Set Reminder</Text></Button> 
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </Box>
    )
}

export default Reminder