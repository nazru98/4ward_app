import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../assets/imagePath'


import HomeScreen from '../Screens/Home/HomeScreen'
import AddPhotoToGallery from '../Screens/AddPhotos/AddPhotoToGallery';
import Colors from '../Styles/Colors';
import SearchLocation from '../Screens/Search/SearchLocation';
import NotificationsScreen from '../Screens/Notifications/NotificationsScreen';
import ProfileScreen from '../Screens/Profile.js/ProfileScreen';
const BottomTab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
   <BottomTab.Navigator
   
   screenOptions={
    {
      headerShown:false,
     
      tabBarStyle:{
       height:80,
       backgroundColor:Colors.gray2,
       borderColor:'transparent',
       borderRadius:8
      },
    

    }
}
   
   >
<BottomTab.Screen  name="HomeScreen" component={HomeScreen}
 options={{tabBarIcon:({focused})=>(
  
      <Image source={imagePath.ic_home}  tintColor={focused?Colors.redColor:Colors.whiteColor} />
     
  ),
  tabBarLabel: ({ focused }) => {

  } }}

/>
<BottomTab.Screen  name="SearchLocation" component={SearchLocation}
 options={{tabBarIcon:({focused})=>(
  
      <Image source={imagePath.ic_srch}  tintColor={focused?Colors.redColor:Colors.whiteColor} />
     
  ),
  tabBarLabel: ({ focused }) => {

  } }}

/>
<BottomTab.Screen  name="AddPhotoToGallery" component={AddPhotoToGallery}
 options={{tabBarIcon:({focused})=>(
  
      <Image source={imagePath.ic_plus}  tintColor={focused?Colors.redColor:Colors.whiteColor} />
     
  ),
  tabBarLabel: ({ focused }) => {

  } }}

/>
<BottomTab.Screen  name="Notification" component={NotificationsScreen}
 options={{tabBarIcon:({focused})=>(
  
      <Image source={imagePath.ic_notify}  tintColor={focused?Colors.redColor:Colors.whiteColor} />
     
  ),
  tabBarLabel: ({ focused }) => {

  } }}

/>
<BottomTab.Screen  name="Profile" component={ProfileScreen}
 options={{tabBarIcon:({focused})=>(
  
      <Image source={imagePath.ic_usrr_1}  tintColor={focused?Colors.redColor:Colors.whiteColor} />
     
  ),
  tabBarLabel: ({ focused }) => {

  } }}

/>
   </BottomTab.Navigator>
  )
}

export default TabNavigation
