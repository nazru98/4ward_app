import { View, Text } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import styles from "./styles";
import InputComp from "../../Components/InputComp";
import ButtonComp from "../../Components/ButtonComp";
import BackButton from "../../Components/BackButton";
import Colors from "../../Styles/Colors";
const SetPasswordScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.loginMainView}>
        <BackButton onPressBackButton={handleBack} />

        <View style={styles.headerView}>
          <Text style={styles.headerTextPassword}>Set Password</Text>
          <Text style={styles.subHeaderTextPassword}>
           Create secure and unique password.
          </Text>
        </View>

      

        <View style={[styles.passwordView,styles.viewMarginTop]}>
          <InputComp
            style={styles.passwordInputField}
            placeholder="Password"
            placeholderTextColor={Colors.whiteColor}
            // onTextChange={handleChange}
          />
          <Text style={styles.showTextStyle}>Show</Text>
        </View>
        <View style={[styles.confirmPasswordView,styles.passwordView]}>
          <InputComp
            style={styles.passwordInputField}
            placeholder="Confirm password"
            placeholderTextColor={Colors.whiteColor}
            // onTextChange={handleChange}
          />
          <Text style={styles.showTextStyle}>Show</Text>
        </View>
      </View>
      <View  style={{ flex: 0.1, paddingHorizontal: 24 }}>
        <ButtonComp text="Go"/>
      </View>
    </WrapperContainer>
  );
};

export default SetPasswordScreen;
