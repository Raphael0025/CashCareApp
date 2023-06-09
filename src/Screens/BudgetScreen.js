import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Fab, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

function BudgetScreen({navigation}) {

    const [list, setList] = React.useState([
        {
            name: "sdf", 
            title: "afd"
        },
        
    ]);

    function ScreenMessage () {
        return( <Box borderBottomWidth="2" borderBottomColor={Colors.main_light} flexDirection="row" padding="3" w="100%" borderRadius="15" bg={Colors.widgetBG}>
            <Box w="30%" padding="2" >
                <Image alt="" size="md" source={require('../../assets/image2.png')}/>
            </Box>
            <Box w="70%" >
                <Text fontSize="xl" bold color="#3E62E175">Set Up your Budget</Text>
                <Text fontSize="md" color="white">Create a list and your spending against it.</Text>
            </Box>
        </Box>)
    }

    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <TopHomeBar screenName="Records" />
            <Box flex={1} padding="5" >
                <ScreenMessage />
                
                <Fab onPress={() => navigation.navigate('Record')} renderInPortal={false} marginBottom="8" shadow={2} size="md" icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
            </Box>
        </Box>
    )
}

export default BudgetScreen