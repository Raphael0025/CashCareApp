import React from 'react'
import {Text, Button, Box} from 'native-base'
import Colors from '../data/color';
import TopHomeBar from '../Components/TopHomeBar'
import CategoryList from '../Components/CategoryList'

function CategoriesScreen() {
  return (
    <Box flex={1} bg={Colors.dark_gray}>
      <TopHomeBar screenName={"Categories"} />
      <Box flex={1} padding="4">
        <Text underline fontSize="lg" bold color={Colors.main}>General</Text>
        <CategoryList />
      </Box>
    </Box>
  )
}

export default CategoriesScreen