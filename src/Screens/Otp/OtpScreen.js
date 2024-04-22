import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

import ButtonComp from "../../Components/ButtonComp";
import WrapperContainer from "../../Components/WrapperContainer";
import BackButton from "../../Components/BackButton";

const OtpScreen = ({navigation}) => {
  const [code, setCode] = useState("");
  const handleBack=()=>{
    navigation.goBack()
  }
  return (
    <WrapperContainer>
      <View style={styles.otpMainView}>
        <BackButton onPressBackButton={handleBack}/>
        <View style={styles.headerView}>
          <Text style={styles.headerTextOtp}>
            Enter the 4-digit code sent to you at 9078612011
          </Text>
          <Text style={styles.editMobile} onPress={()=>handleBack()}>Edit my mobile number</Text>
        </View>
        <SmoothPinCodeInput
          value={code}
          onTextChange={(code) => setCode(code)}
          cellSpacing={10}
          cellSize={40}
          cellStyle={styles.cellStyle}
          containerStyle={styles.otpContainer}
          animated={false}
          textStyle={styles.otpText}
          cellStyleFocused={styles.cellFocused}
        />
      </View>
      <View style={styles.buttonResendView}>
<Text style={styles.resendCode}>Re send code in 0:14</Text>
<ButtonComp text="VERIFY"/>
      </View>
    </WrapperContainer>
  );
};

export default OtpScreen;
