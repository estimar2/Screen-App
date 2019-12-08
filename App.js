import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";

//FirstScreen하고, SecondScreen, ThirdScreen 가져와서 뿌려
class App extends React.Component {
  render() {
    return <MainNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
