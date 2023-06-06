import React from 'react'
import {Box, Image, Text, View, Icon, IconButton, Button, Pressable, StatusBar, HStack} from 'native-base'
import Colors from '../data/color';
import { MaterialIcons } from "@expo/vector-icons";

function TopHomeBar({screenName}) {
    return (<>
        <StatusBar bg={Colors.main_light} barStyle="light-content" />
        <Box safeAreaTop bg={Colors.main_dark} />
        <HStack px="1" py="1" bg={Colors.main_dark} justifyContent="space-between" alignItems="center" w="full" >
            <HStack alignItems="center">
                <IconButton onPress={() => {console.log("okB")}} icon={<Icon size="10" as={MaterialIcons} name="menu" color={Colors.main_light} />} />
                <Text color="white" fontSize="20" fontWeight="bold">{screenName}</Text>
            </HStack>
            <HStack>
                <IconButton onPress={() => {console.log("settings")}} icon={<Icon as={MaterialIcons} name="settings" size="lg" color="white" />} />
            </HStack>
        </HStack>
    </>
    )
}

export default TopHomeBar