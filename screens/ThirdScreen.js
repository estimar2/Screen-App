// 1.리엑트를 가져온다.
// 2.사용할 컴포넌트를 리엑트 네이티브에서 가져온다.
// 3.화면을 그릴 class나 function을 만들어준다.
// 4.외부에서 사용할 수 있게 export해준다.

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { publicColors } from "../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import ComInput from "../components/ComInput";
import ComButton from "../components/ComButton";

const Title = styled.Text`
  font-size: 26px;
  color: ${publicColors.SUC_COLOR};
  margin-left: 20px;
`;

const Forget = styled.Text`
  font-size: 16px;
  color: ${publicColors.SUC_COLOR};
`;

const CpTxt = styled.Text`
  font-size: 10px;
  color: #777;
`;

//extends가 없는 상태 => 그냥 객체(Object) : 아무런 기능이 없다.
// Object 클래스는 어떠한 데이터 또는 '그' 무언가를 미리 만들어주는 공간 이라고 보면 됨
// 실제 우리 눈에 보이는 모든 것을 객체 라고 함

//extends가 붙으면 리엑트 컴포넌트로써의 클래스 라고 이야기 한다.

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box_1}>
        <AntDesign name="login" size={32} />
        <Title>Sign In.</Title>
      </View>

      <View style={styles.box_2}>
        <ComInput ph="Email" />
        <ComInput ph="Password" st={true} />
        <Forget>Forget your Password??</Forget>

        <View style={styles.btnArea}>
          {/* nav라는 이름에 navigation을 담아서 보내줌 */}
          <ComButton txt="Sign Up" nav={navigation} su={true} />
          <View style={{ width: 10 }}></View>
          <ComButton txt="Login" nav={navigation} su={false} />
        </View>
      </View>

      <View style={styles.box_3}>
        <CpTxt>@copyright by devloper song </CpTxt>
        <TouchableOpacity
          onPress={() => navigation.navigate({ routeName: "SignUp2" })}
        >
          <Text>ETC PAGE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box_1: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  box_2: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  btnArea: { flexDirection: "row", marginTop: 10 },
  box_3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ThirdScreen;
