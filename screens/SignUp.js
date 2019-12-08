import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComInput from "../components/ComInput";
import ComButton from "../components/ComButton";
import styled from "styled-components";

const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 40px;
`;

//state 는 class가 있을때 사용할 수 있음
// none Class
// stateless

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 10, height: 50 }}></View>
        <Title>Join Us</Title>
        <ComInput ph="Email" />
        <ComInput ph="User_Name" />
        <ComInput ph="Password" />
        <ComInput ph="Verify Password" />
        <ComInput ph="Mobile" />
        <ComButton txt="Join Us" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default SignUp;
