import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
  otpMainView: {
    flex: 0.85,
    paddingTop: 23,
    paddingHorizontal: 24,
  },
  headerView: {
    marginTop: 16,
  },
  headerTextOtp: {
    fontWeight: "600",
    fontSize: 24,
    color: Colors.whiteColor,
    letterSpacing: 0,
    lineHeight: 32,
  },

  editMobile: { 
    letterSpacing: 0,
    color: Colors.lightSkyBlue,
    fontSize: 15,
    lineHeight: 32,
  },

  cellStyle:{
    borderWidth: 2,
    borderRadius: 10,
    marginLeft:10,
    borderColor: 'transparent',
    backgroundColor: Colors.gray2,
    height:48,
    
  },
  otpContainer:{
    marginLeft:5,
    marginTop:20,
  },
  otpText:{
    fontSize: 14,
    color: Colors.whiteColor,
    opacity:.5
  },
  cellFocused:{
    borderColor: Colors.gray2,
    
  },
  resendCode:{
    color:Colors.whiteColor,
    fontSize:15,
    marginBottom:24,
    opacity:.5
   
  },
  buttonResendView:{
    flex:.15,
    marginBottom:33,
    paddingHorizontal: 24,
  }
});
export default styles;
