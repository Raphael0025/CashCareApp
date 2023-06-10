import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

function ProfileScreen() {
    const navigation = useNavigation();
    const [data, setData] = React.useState([])

    const [userDetails, setUserDetails] = React.useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        jobDesc: '',
        employmentStatus: '',
        workField: '',
        workHours: '',
        uName: '',
        emailAddress: '',
        password: '',
      });
    
      const saveUserDetails = async () => {
        try {
          // Save the updated user details to AsyncStorage
          await AsyncStorage.setItem('user', JSON.stringify(userDetails));
          console.log('User details saved successfully!');
          console.log(userDetails);
      
          const user = await AsyncStorage.getItem('user');
          const userData = JSON.parse(user);
      
          const updatedData = {
            ...userData,
            fName: userDetails.firstName,
            lName: userDetails.lastName,
            gender: userDetails.gender,
            bday: userDetails.birthDate,
            jobDesc: userDetails.jobDesc,
            employment: userDetails.employmentStatus,
            work: userDetails.workField,
            workHr: userDetails.workHours,
            uName: userDetails.uName,
            email: userDetails.emailAddress,
            password: userDetails.password,
            amount: userData.amount || 0 // Add a fallback value in case amount is undefined
          };
      
          const amount = updatedData.amount;
          await AsyncStorage.setItem('user', JSON.stringify(updatedData));
          console.log('Amount:', amount);
          setData(updatedData);
        } catch (error) {
          console.log('Error saving user details:', error);
        }
      };

      const deleteUser = async () => {
        try {
          // Delete user data from AsyncStorage
          await AsyncStorage.removeItem('user');
          console.log('User data deleted successfully!');
          
          // Redirect to login screen
          navigation.navigate('Login');
        } catch (error) {
          console.log('Error deleting user data:', error);
        }
      };

    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <ScrollView >
                <Box justifyContent="center" alignItems="center" w="100%" h="15%" marginTop="5" >
                    <Box borderRadius="100" bg="#5A6A7025" w="150" h="150" justifyContent="center" alignItems="center">
                        <Icon as={MaterialIcons} name="perm-identity" size="70" color={Colors.main_dark} />
                    </Box>
                </Box>
                <Box flex={1} padding="3" >
                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Personal Information</Text>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                        <Box w="45%">
                            <Text color="#06897C">First Name</Text>
                            <Input borderWidth="1.5" placeholder={data.fName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.firstName}
                                onChangeText={(firstName) => {
                                    setUserDetails((prevState) => ({ ...userDetails, firstName }));
                                }} />
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Last Name</Text>
                            <Input borderWidth="1.5" placeholder={data.lName} fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.lastName}
                                onChangeText={(lastName) => {
                                    setUserDetails((prevState) => ({ ...userDetails, lastName }));
                                }} />   
                        </Box>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center">
                        <Box w="45%">
                            <Text color="#06897C">Gender</Text>
                            <Select placeholder={data.gender} color={Colors.secondary_txt} fontSize="md" borderColor={Colors.main_light} selectedValue={userDetails.gender}  accessibilityLabel="Choose Gender"  _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={(itemValue) => setUserDetails({ ...userDetails, gender: itemValue })}>
                                <Select.Item label="Male" value="male" />
                                <Select.Item label="Female" value="female" />
                            </Select>
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Birth Date</Text>
                            <Input placeholder={data.bday} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.birthDate}
                                onChangeText={(birthDate) => {
                                    setUserDetails((prevState) => ({ ...userDetails, birthDate }));
                                }} />
                        </Box>
                    </Box>

                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Occupational Information</Text>
                    </Box>
                    <Box flexDirection="row" w="100%" gap="3" alignItems="center" justifyContent="center" marginBottom="3">
                        <Box w="45%">
                            <Text color="#06897C">Job Description</Text>
                            <Input placeholder={data.jobDesc} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.jobDesc}
                                onChangeText={(jobDesc) => {
                                    setUserDetails((prevState) => ({ ...userDetails, jobDesc }));
                                }} />
                        </Box>
                        <Box w="45%">
                            <Text color="#06897C">Employment Status</Text>
                            <Input placeholder={data.employment} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.employmentStatus}
                                onChangeText={(employmentStatus) => {
                                    setUserDetails((prevState) => ({ ...userDetails, employmentStatus }));
                                }} />
                        </Box>
                    </Box>
                    <Box flexDirection="row" flexWrap="wrap" w="100%" gap="3" alignItems="flex-start" paddingLeft="3" justifyContent="flex-start">
                        <Box w="60%">
                            <Text color="#06897C">Work Field</Text>
                            <Input placeholder={data.work} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.workField}
                                onChangeText={(workField) => {
                                    setUserDetails((prevState) => ({ ...userDetails, workField }));
                                }} />
                        </Box>
                        <Box w="38%">
                            <Text color="#06897C">Work Hr/s (Optional)</Text>
                            <Input placeholder={data.workHr} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.workHours}
                                onChangeText={(workHours) => {
                                    setUserDetails((prevState) => ({ ...userDetails, workHours }));
                                }} />
                        </Box>
                    </Box>

                    <Box marginTop="5" borderBottomColor={Colors.main_dark} borderBottomWidth="1" marginBottom="4">
                        <Text bold color={Colors.gray} fontSize="md">Credentials</Text>
                    </Box>
                    <Box flexDirection="column" w="100%" gap="3" alignItems="flex-start" justifyContent="flex-start" paddingLeft="3" marginBottom="3">
                        <Box w="75%">
                            <Text color="#06897C">User Name</Text>
                            <Input placeholder={data.uName} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.uName}
                                onChangeText={(uName) => {
                                    setUserDetails((prevState) => ({ ...userDetails, uName }));
                                }} />
                        </Box>
                        <Box w="75%">
                            <Text color="#06897C">Email Address</Text>
                            <Input placeholder={data.email} borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.emailAddress}
                                onChangeText={(emailAddress) => {
                                    setUserDetails((prevState) => ({ ...userDetails, emailAddress }));
                                }} />
                        </Box>
                        <Box w="75%">
                            <Text color="#06897C">Password</Text>
                            <Input placeholder={data.password} type="password" borderWidth="1.5" fontSize="md" _focus={{bg: Colors.widgetBG}} textAlign="center" color={Colors.secondary_txt} borderColor={Colors.main_light} value={userDetails.password}
                                onChangeText={(password) => {
                                    setUserDetails((prevState) => ({ ...userDetails, password }));
                                }} />
                        </Box>
                    </Box>

                    <Box paddingLeft="3" flexDirection="row" paddingBottom="8" marginTop="3" alignItems="center" justifyContent="center" flex={1} gap="3" w="100%">
                        <Button w="45%" bg={Colors.main_dark} onPress={saveUserDetails}>Save</Button>
                        <Button w="45%" bg="danger.500" onPress={deleteUser}>Delete</Button>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default ProfileScreen