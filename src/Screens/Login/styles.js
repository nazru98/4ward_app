import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
  loginMainView: {
    flex: .9,
    paddingTop: 23,
    paddingHorizontal: 24,
  },
  headerView: {
    height: 68,
    marginTop: 16,
    justifyContent:'center'
  },
  headerTextLogin: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.whiteColor,
    height: 40,
    letterSpacing: 0,
    lineHeight: 32,
  },
  subHeaderTextLogin: {
    height: 24,
    letterSpacing: 0,
    color: Colors.lightGray,
    fontSize: 15,
    lineHeight: 25,
  },
  
  passwordView: {
    marginTop: 16,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: Colors.gray2,
  },
  passwordInputField: {
    flex:.98,
    fontSize: 16,
    paddingHorizontal: 10,
    opacity: 0.5,
    color: Colors.whiteColor,
    fontSize: 14,
  },
  otpPasswordView: {
    marginTop: 25,
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  otpText: {
    color: Colors.whiteColor,
    fontSize: 13,
    height: 32,
    lineHeight: 20,
    fontWeight: "300",
  },
  forgotText: {
    color: Colors.lightSkyBlue,
    fontSize: 13,
    height: 32,
    lineHeight: 20,
  },
  showTextStyle:{
     marginRight: 12, 
     color: Colors.whiteColor, 
     opacity: 0.5 
    },
});
export default styles;
