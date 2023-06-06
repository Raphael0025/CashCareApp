import React from 'react'
import {Box, Text} from 'native-base'
import TopHomeBar from '../Components/TopHomeBar'

function ProfileScreen() {
    return (
        <Box>
            <TopHomeBar screenName="Profile" />
            <Box>Profile</Box>
        </Box>
    )
}

export default ProfileScreen