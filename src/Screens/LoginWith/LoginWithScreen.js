import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import imagePath from "../../assets/imagePath";
import ButtonComp from "../../Components/ButtonComp";
import LoginWithComp from "../../Components/LoginWithComp";
import WrapperContainer from "../../Components/WrapperContainer";
import Colors from "../../Styles/Colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginWithScreen = ({ navigation }) => {
  const handleGoSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLoginWithMobile = () => {
    navigation.navigate("Login");
  };
  return (
    <WrapperContainer >
     
      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom:20}}>
      <View style={{flex:0.5}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 87,
          }}
        >
          <Image
            source={imagePath.forwardLogo}
            style={{ resizeMode: "contain", marginTop: 32, height:windowHeight/2.7 }}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            color: Colors.gray1,
            fontSize: 13,
            marginTop: 20,
          }}
        >
          <Text>By clicking "Log In", you agree with our </Text>
          <Text style={{ fontWeight: "600" }}>Terms.</Text>
          <Text> Learn how we process your data in our </Text>
          <Text style={{ fontWeight: "600" }}>Privacy </Text>
          <Text>policy</Text>
        </Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ marginTop: 24 }}>
            <ButtonComp
              text="Log In with Phone number "
              onButtonPress={handleLoginWithMobile}
            />
          </View>

          <Text
            style={{
              textAlign: "center",
              marginVertical: 16,
              color: Colors.lightGray,
            }}
          >
            Or
          </Text>
          <View style={{ marginBottom: 16 }}>
            <LoginWithComp
              source={imagePath.ic_google}
              text="Log In with Google"
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <LoginWithComp
              source={imagePath.ic_facebook}
              text="Log In with Facebook"
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <LoginWithComp
              source={imagePath.ic_apple}
              text="Log In with Apple"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.whiteColor }}>New Here? </Text>
            <TouchableOpacity
              onPress={() => handleGoSignUp()}
              activeOpacity={0.9}
            >
              <Text style={{ color: Colors.lightSkyBlue }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default LoginWithScreen;
