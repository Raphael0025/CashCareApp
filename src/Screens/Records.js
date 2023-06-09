import React from 'react'
import {Box, Image, Text, Icon, CheckIcon, Input, ScrollView, Fab, Select, Button} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Tabs from '../Components/Tabs'

function Records({navigation}) {

    return (
        <Box flex={1} bg={Colors.dark_gray}  >
            <TopHomeBar screenName="Records" />
            <Box flex={1} bg="red.500">
                <Tabs />
                <Fab onPress={() => navigation.navigate('CreateBudget')} renderInPortal={false} marginBottom="8" shadow={2} size="md" icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
            </Box>
        </Box>
    )
}

export default Records