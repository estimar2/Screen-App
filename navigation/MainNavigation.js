// TabNavigation (화면3개) + SignUp가지고 APP으로 가야지

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import SignUp from "../screens/SignUp";
import SignUp2 from "../screens/SignUp2";

//const MainNavigation = createStackNavigator(
//{하단 버튼 3개 가진 텝네비게이션, 방금 만든 SignUp
//너가 사용할 텝 설정해주고, 디테일 화면 하나씩 나열해!
//  },{// 저녀석들의 설정},{옵션});
const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: { header: null }
    },
    SignUp: {
      screen: SignUp
    },
    SignUp2: {
      screen: SignUp2
    }
  },

  {
    headerMode: "screen",
    mode: "card" //card : 우측에서 화면이 들어옴, modal : 하단에서 화면이 올라옴
  }
);

export default createAppContainer(MainNavigation);
