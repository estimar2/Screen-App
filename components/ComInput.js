import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { publicColors } from "../assets/colors";

const { width } = Dimensions.get("window");

class ComInput extends React.Component {
  //나 뭔가 받을 꺼야. 준비해
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.ph}
        secureTextEntry={this.props.st}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: width / 1.3,
    height: 40,
    borderColor: "#eee",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default ComInput;
