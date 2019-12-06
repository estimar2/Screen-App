//화면 3개를 연결시켜주는 녀석

//import { createBottomTabNavigator } from 'react-navigation-tabs'; 에서 {}를 사용하는 이유
// - react-navigation-tabs 안에 존재하는 createBottomTabNavigator 이것만 가져오기 때문에 {}로 감싸줌
import { createBottomTabNavigator } from "react-navigation-tabs";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import { publicColors } from "../assets/colors";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

const TabNavigation = createBottomTabNavigator(
  {
    //RouteConfigs작성
    FirstScreen: { screen: FirstScreen, navigationOptions: { title: "Feeds" } },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: { title: "Stories" }
    },
    ThirdScreen: { screen: ThirdScreen, navigationOptions: { title: "User" } }
  },

  {
    //TabNavigatorConfig
    tabBarOptions: {
      style: {
        backgroundColor: publicColors.BACKGROUND,
        paddingBottom: Platform.OS === "ios" ? 18 : 18
      }
    }
  }
);

//외부에서 사용하게 하도록 export default TabNavigation;를 쓰면 안됨
//TabNavigation 이 리엑트 컴포넌트가 아니기때문에 createAppContainer를 사용하여 컴포넌트를 만들어준뒤 사용
export default createAppContainer(TabNavigation);
