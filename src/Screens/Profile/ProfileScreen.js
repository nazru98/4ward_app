import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Colors from '../../Styles/Colors'
import imagePath from '../../assets/imagePath'
import { useSelector } from 'react-redux'
const ProfileScreen = ({navigation}) => {

  const handleGoToEditPage=()=>{
    // editUserProfile(true)
    navigation.navigate("EditProfile")
  }
  const handleGoToLoginWithScreen=()=>{
    navigation.navigate("LoginWith")
  }
  return (
   <WrapperContainer>
    <View style={{flex:0.12,justifyContent:'center'}}>
    <Text style={{color:Colors.whiteColor,fontSize:16,fontWeight:'600'}}>Profile</Text>
    </View>
     <TouchableOpacity style={{flexDirection:'row', flex:.08}} onPress={handleGoToEditPage}>
      <Image source={imagePath.ic_usrr_1}/>
      <Text style={{marginLeft:20,color:Colors.whiteColor,fontSize:15}}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row', flex:.08}}>
      <Image source={imagePath.ic_key}/>
      <Text style={{marginLeft:20,color:Colors.whiteColor,fontSize:15}}>Change Password</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row', flex:.08}} onPress={handleGoToLoginWithScreen}>
      <Image source={imagePath.ic_logout}/>
      <Text style={{marginLeft:20,color:Colors.whiteColor,fontSize:15}}>Sign out</Text>
    </TouchableOpacity>
   </WrapperContainer>
  )
}

export default ProfileScreen