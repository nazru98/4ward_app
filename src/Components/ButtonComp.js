import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'


const ButtonComp = ({text,onButtonPress}) => {
  return (
    <TouchableOpacity onPress={onButtonPress} style={styles.buttonStyle}>
      <Text style={styles.textColor}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles=StyleSheet.create({
  buttonStyle: {
      backgroundColor: "#F43738",
      alignItems: "center",
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: "transparent",
      borderRadius: 8,
   
    },
    textColor:{
      color:"#FFFFFF",
      fontSize:14
    }
})