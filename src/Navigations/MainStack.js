import { View, Text } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'
const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name="TabNavigation" component={TabNavigation}  options={{ headerShown: false }}/>
    </>
  )
}

export default MainStack