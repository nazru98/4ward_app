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
  headerTextPassword: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.whiteColor,
    height: 40,
    letterSpacing: 0,
    lineHeight: 32,
  },
  subHeaderTextPassword: {
    height: 24,
    letterSpacing: 0,
    color: Colors.lightGray,
    fontSize: 15,
    lineHeight: 25,
  },
  viewMarginTop:{
    marginTop: 32,
  },
  passwordView: {
   
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: Colors.gray2,
  },
  confirmPasswordView:{
    marginTop: 16,
  },
  passwordInputField: {
    flex:.98,
    fontSize: 16,
    paddingHorizontal: 10,
    opacity: 0.5,
    color: Colors.whiteColor,
    fontSize: 14,
  },
 
  showTextStyle:{
     marginRight: 12, 
     color: Colors.whiteColor, 
     opacity: 0.5 
    },
});
export default styles;
