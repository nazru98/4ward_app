import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import InputComp from "../../Components/InputComp";
import ButtonComp from "../../Components/ButtonComp";

import MobileFieldComponent from "../../Components/MobileFieldComponent";
import BackButton from "../../Components/BackButton";

import WrapperContainer from "../../Components/WrapperContainer";
import Colors from "../../Styles/Colors";

const SignUpScreen = ({navigation}) => {

  const handleBack=()=>{
navigation.goBack()
  }
  const handleChange = () => {};

  const handleButtonPress=()=>{
    navigation.navigate("SetPasswordScreen")
  }
  return (
    <WrapperContainer>
      <View style={styles.signUpMainView}>
        <BackButton  onPressBackButton={handleBack}/>
        <View style={styles.headerView}>
          <Text style={styles.headerTextLogin}>Create new account</Text>
          <Text style={styles.subHeaderTextLogin}>
            Create an account so you can continue
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" , marginTop:16,}}>
          <View style={styles.nameView}>
            <InputComp
              style={styles.nameInputField}
              placeholder="First Name"
              placeholderTextColor={Colors.whiteColor}
              onTextChange={handleChange}
            />
          </View>
          <View style={styles.nameView}>
            <InputComp
              style={styles.nameInputField}
              placeholder="Last Name"
              placeholderTextColor={Colors.whiteColor}
              onTextChange={handleChange}
            />
          </View>
        </View>
        <View style={styles.emailView}>
          <InputComp
            style={styles.nameInputField}
            placeholder="Email"
            placeholderTextColor={Colors.whiteColor}
            onTextChange={handleChange}
          />
        </View>
        <MobileFieldComponent placeholderTextColor={Colors.whiteColor}/>
      </View>
      <View style={{ flex: 0.1, paddingHorizontal: 24 }}>
        <ButtonComp text="NEXT"   onButtonPress={handleButtonPress}/>
      </View>
    </WrapperContainer>
  );
};

export default SignUpScreen;
