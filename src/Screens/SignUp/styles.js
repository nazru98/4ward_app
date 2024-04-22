import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    signUpMainView: {
    flex: 0.9,
    paddingTop: 23,
    paddingHorizontal: 24,
  },
  headerView: {
    height: 68,
    marginTop: 16,
    justifyContent:'center'
  },
  headerTextLogin: {
    fontWeight: "600",
    fontSize: 24,
    color: "#FFFFFF",
    height: 40,

  
  },
  subHeaderTextLogin: {
    height: 24,
    letterSpacing: 0,
    color: "#A6A6A6",
    fontSize: 15,
  
  },
  
  emailView: {
    marginTop: 16,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: "#4C4C4C",
  },
  nameInputField: {
    flex:1,
    fontSize: 16,
    paddingHorizontal: 10,
    opacity: 0.5,
    color: "#FFFFFF",
    fontSize: 14,
  },
  otpPasswordView: {
    marginTop: 25,
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
 
  otpText: {
    color: "#FFFFFF",
    fontSize: 13,
    height: 32,
    lineHeight: 20,
    fontWeight: '300',
  },
  forgotText: {
    color: "#32C5FF",
    fontSize: 13,
    height: 32,
    lineHeight: 20,
  },
  nameView: {
   flex:.48,
   marginTop:24,
    marginTop: 16,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: "#4C4C4C",
  },
});
export default styles;
