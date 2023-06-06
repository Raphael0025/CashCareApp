import React from 'react'
import {Box, Icon, ScrollView, Text} from 'native-base'
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import Colors from '../data/color';

function CategoryList() {
    const generalCategory = [
        {
            key: "1",
            icon: "shopping-cart",
            iconColor: "#DE3535",
            name: "Food & Groceries"
        },
        {
            key: "2",
            icon: "home",
            iconColor: "#3084A8",
            name: "Housing & Utilities"
        },{
            key: "3",
            icon: "subway",
            iconColor: "#AB793F",
            name: "Transportation"
        },
        {
            key: "4",
            icon: "soap",
            iconColor: "#F24E1E",
            name: "Personal & Health"
        },{
            key: "5",
            icon: "theaters",
            iconColor: "#FFD233",
            name: "Entertainment"
        },
        {
            key: "6",
            icon: "work",
            iconColor: "#55B8B2",
            name: "Study & Training"
        },
        {
            key: "7",
            icon: "miscellaneous-services",
            iconColor: "#B855A2",
            name: "Miscellaneous"
        },
        {
            key: "8",
            icon: "home-filled",
            iconColor: "#4ECB71",
            name: "Others"
        },
        {
            key: "9",
            icon: "category",
            iconColor: "#2868DE",
            name: "Customize"
        }
    ]
    return (
        <Box paddingTop="3" flex={1} >
            <ScrollView>
                {generalCategory.map((key, itm) => {
                return <Box flexDirection="row" gap="3" alignItems="center" justifyContent="flex-start" borderRadius="10" bg="#342F2Fee" marginBottom="5" padding="3">
                        <Icon as={MaterialIcons} name={key.icon} size="md" color={key.iconColor} />
                        <Text fontSize="md" bold color={Colors.white}>{key.name}</Text>
                    </Box>
                })}
            </ScrollView>
        </Box>
    )
}

export default CategoryList