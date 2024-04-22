import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from "../../Components/WrapperContainer"
const InitialScreen = ({navigation}) => {
  const handleStarted=()=>{
navigation.navigate("")
  }
  return (
    <WrapperContainer >
      <View onPress={()=>handleStarted()}>
      <Text>InitialScreen</Text>
      </View>
    </WrapperContainer>
  )
}

export default InitialScreen