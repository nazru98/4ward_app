import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Styles/Colors";


const WrapperContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
},
});