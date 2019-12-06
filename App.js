import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./navigation/TabNavigation";

//FirstScreen하고, SecondScreen, ThirdScreen 가져와서 뿌려
class App extends React.Component {
  render() {
    return <TabNavigation />;
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
