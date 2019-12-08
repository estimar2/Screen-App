import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { publicColors } from "../assets/colors";
import { withNavigation } from "react-navigation";

const { width } = Dimensions.get("window");

const ComButton = ({ txt, nav, su }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={
        su
          ? () => nav.navigate({ routeName: "SignUp" })
          : () => alert("아직 개발 안했습니다~!!!")
      }
    >
      <Text style={styles.btnTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

// class ComButton extends React.Component {
//   constructor(props) {
//     //  super(props) : 나를 호출한 녀석의 props만 사용하겠다는 이야기
//     super(props);
//   }

//   // onPress = {function ()} => 즉시 실행하세요
//   // onPress = {function} => 눌리면 실행하세요

//   render() {
//     return (
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => this.props.navigation.navigate({ routeName: "SignUp" })}
//       >
//         <Text style={styles.btnTxt}>{this.props.children}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

const styles = StyleSheet.create({
  btn: {
    width: width / 2.5,
    height: 30,
    backgroundColor: publicColors.BTN_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnTxt: { fontSize: 16, color: "#fff", fontWeight: "bold" }
});

export default ComButton;
