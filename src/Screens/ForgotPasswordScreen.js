import React, { useState, useEffect } from 'react';
import { Box, Text, Input, Button, Image, Pressable, Icon } from 'native-base';
import Colors from '../data/color';
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

function ForgotPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const handleTogglePasswordVisibility = () => {
    setShow(!show);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const userData = JSON.parse(user);
      setData(userData);
    } catch (error) {
      console.log('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    if (data) {
      setUserDetails({
        fName: data.fName || '',
        lName: data.lName || '',
        gender: data.gender || '',
        bDay: data.bDay || '',
        jobDesc: data.jobDesc || '',
        employment: data.employment || '',
        work: data.work || '',
        workHr: data.workHr || '',
        uName: data.uName || '',
        email: data.email || '',
        password: data.password || '',
      });
    }
  }, [data]);

  const saveNewPassword = async () => {
    try {
      if (!newPassword) return;

      const storedData = await AsyncStorage.getItem('user');
      const userData = JSON.parse(storedData);
      const updatedData = { ...userData, password: newPassword };

      await AsyncStorage.setItem('user', JSON.stringify(updatedData));
      console.log('New password saved successfully!');
      alert('New password saved successfully!');
      console.log(updatedData);

      setData(updatedData);
      setNewPassword('');
      navigation.navigate('Login')
    } catch (error) {
      console.log('Error saving new password:', error);
    }
  };

    return (
        <Box flex={1} bg={{
            linearGradient: {
                colors: [Colors.bgGradient, Colors.black],
                start: [1.5, 0],
                end: [1.5, 1.5]
                }
            }} alignItems="center" 
                justifyContent="space-evenly" 
                flexDirection="column" 
                paddingLeft="3" 
                paddingRight="3">
            <Box w='full' h='lg' alignItems="center" justifyContent='center'>
                <Image alt="CashCare" 
                    size='2xs'
                    w='200'
                    h="150"
                    source={require('../../assets/logo.png')}/>
            </Box>
            <Box w='full' h="xl" borderRadius='25'
                bg={{
                    linearGradient: {
                        colors: [Colors.secondaryColor, Colors.white, Colors.black],
                        start: [0, 0],
                        end: [0, 1],
                        locations: [0, 0.2, 0.85]
                        }
                    }} flexDirection="column" gap="8"
                        alignItems="flex-start"
                        px="10" py="20">
                <Text textTransform="uppercase" color={Colors.main} fontSize="lg" bold>Forgot Password:</Text>
                <Input value={newPassword} onChangeText={(text) => setNewPassword(text)} shadow="5" _focus={{bg: "white"}} borderRadius="10" bg="white" variant="filled" size="md" type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={handleTogglePasswordVisibility}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="emerald.600" />
                    </Pressable>} placeholder="Create New Password" />

                <Input value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} shadow="5" _focus={{bg: "white"}} borderRadius="10" bg="white" variant="filled" size="md" type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={handleTogglePasswordVisibility}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="emerald.600" />
                    </Pressable>} placeholder="Confirm New Password" />
                <Button p="3" bg={Colors.main} borderRadius="10" onPress={saveNewPassword }>
                    <Text fontSize="sm" bold textTransform='uppercase' color={Colors.white}>Update Password</Text>
                </Button>
            </Box>
        </Box>
    )
}

export default ForgotPasswordScreen