// 1.리엑트를 가져온다.
// 2.사용할 컴포넌트를 리엑트 네이티브에서 가져온다.
// 3.화면을 그릴 class나 function을 만들어준다.
// 4.외부에서 사용할 수 있게 export해준다.

import React from "react";
import { View, StyleSheet, Text } from "react-native";

//extends가 없는 상태 => 그냥 객체(Object) : 아무런 기능이 없다.
// Object 클래스는 어떠한 데이터 또는 '그' 무언가를 미리 만들어주는 공간 이라고 보면 됨
// 실제 우리 눈에 보이는 모든 것을 객체 라고 함

//extends가 붙으면 리엑트 컴포넌트로써의 클래스 라고 이야기 한다.

class FirstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm FirstScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FirstScreen;
