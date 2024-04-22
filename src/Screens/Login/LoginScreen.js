import { View, Text} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import InputComp from '../../Components/InputComp'
import ButtonComp from "../../Components/ButtonComp";
import MobileFieldComponent from "../../Components/MobileFieldComponent";
import BackButton from "../../Components/BackButton";
import WrapperContainer from "../../Components/WrapperContainer";
import Colors from "../../Styles/Colors";
const LoginScreen = ({navigation}) => {
  const handleChange = () => {};

  const handleBack=()=>{
navigation.goBack()
  }


  const handleGoOtpScreen=()=>{
    navigation.navigate("OtpScreen")
  }
  return (
    <WrapperContainer >
      <View style={styles.loginMainView}>
   
      <BackButton  onPressBackButton={handleBack}/>
      

        <View style={styles.headerView}>
          <Text style={styles.headerTextLogin}>Welcome Back!</Text>
          <Text style={styles.subHeaderTextLogin}>
            We are happy to see. You can login to continue.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <MobileFieldComponent placeholderTextColor={Colors.whiteColor} />
        </View>

        <View style={styles.passwordView}>
          <InputComp
            style={styles.passwordInputField}
            placeholder="Password"
            placeholderTextColor={Colors.whiteColor}
            onTextChange={handleChange}
          />
          <Text style={styles.showTextStyle}>
            Show
          </Text>
        </View>
        <View style={styles.otpPasswordView}>
          <Text style={styles.otpText} onPress={()=>handleGoOtpScreen()}>Use OTP</Text>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>
      </View>
      <View style={{ flex: 0.1, paddingHorizontal: 24 }}>
        <ButtonComp text="LOGIN"color={Colors.whiteColor} style={styles.buttonStyle} />
      </View>
    </WrapperContainer>
  );
};

export default LoginScreen;
