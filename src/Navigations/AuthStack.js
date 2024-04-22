import { View, Text } from 'react-native'
import React from 'react'
import LoginWithScreen from '../Screens/LoginWith/LoginWithScreen'
import LoginScreen from '../Screens/Login/LoginScreen'
import OtpScreen from '../Screens/Otp/OtpScreen'
import SignUpScreen from '../Screens/SignUp/SignUpScreen'
import SetPasswordScreen from '../Screens/SetPassword/SetPasswordScreen'

const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="LoginWith"
        component={LoginWithScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetPasswordScreen"
        component={SetPasswordScreen}
        options={{ headerShown: false }}
      />
    </>
  )
}

export default AuthStack