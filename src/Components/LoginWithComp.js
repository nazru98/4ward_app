import { Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Colors from '../Styles/Colors'


const LoginWithComp = ({text,source,onButtonPress}) => {
  return (
    <TouchableOpacity  style={styles.mainView} activeOpacity={.9} onPress={onButtonPress}>
    <Image source={source} style={styles.img}/>
  <Text style={styles.textLogin}>{text}</Text>
  <Text>   </Text>
</TouchableOpacity>
  )
}

export default LoginWithComp
const styles=StyleSheet.create({
mainView:{
    backgroundColor:Colors.whiteColor,
     borderWidth: 1,
     borderColor: "transparent",
     borderRadius: 8,
     height:48,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
    
    },
    img:{resizeMode:'contain',marginLeft:20},
    textLogin:{
        fontSize:14,
        fontWeight:'bold',
    
    }
})