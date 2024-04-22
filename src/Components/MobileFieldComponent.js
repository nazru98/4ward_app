
import { View, Text, TextInput, StyleSheet ,Image,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import imagePath from "../assets/imagePath";
// import {CountryPicker} from "@digieggs/rn-country-code-picker"
import Colors from "../Styles/Colors";
const MobileFieldComponent = ({
  onTextChange,
  placeholderTextColor,
}) => {


  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
const [countryFlag, setCountryFlag]=useState("")
  return (
    
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.dropDownView} 
         onPress={() => setShow(true)}>
         <Text style={{fontSize:20}}>{countryFlag}</Text>
    <Text style={{color:"#FFFFFF",fontSize:14}}>{countryCode}</Text>
    <Image
            source={imagePath.ic_down}
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>
        {/* <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false)
    setCountryFlag(item.flag,)
        }
      }
      enableModalAvoiding={true}
      /> */}
        <View style={styles.mobileNumberView}>
          <TextInput style={styles.mobileInput}
            placeholder="Mobile"
            onChange={onTextChange}
            keyboardType="numeric"
            placeholderTextColor={placeholderTextColor}
          />
        </View>
      </View>
    
  );
};

export default MobileFieldComponent;
const styles = StyleSheet.create({
  mainView: {
    marginTop: 16,
    flexDirection: "row",
  
  },
  mobileNumberView: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: "#4C4C4C",
    flex: 0.7,
    height: 48,
    resizeMode: "contain",
    justifyContent: "center",
  },
  dropDownView: {
    flex: 0.3,
    height: 48,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: "#4C4C4C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 16,
  },
  mobileInput: {
    flex:1,
     color: "white",
     fontSize: 16,
     paddingHorizontal: 10,
     opacity: 0.5,
     color: "#FFFFFF",
     fontSize: 14,
   },
});
