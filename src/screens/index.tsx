import React, { Component } from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

/* Screens */
import ScreenAuthLoading from "./Auth/Loading";
import ScreenAuthLogIn from "./Auth/LogIn";
import ScreenAppHome from "./App/Home";

/* Navigation Services to Navigation Actions */
import NavigationService from "../services/NavigationService";

const AppStack = createStackNavigator({ Home: ScreenAppHome });
const AuthStack = createStackNavigator({ SignIn: ScreenAuthLogIn });

const NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: ScreenAuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

class ScreenRoot extends Component {
  render() {
    return (
      <NavigationContainer
        ref={ref => NavigationService.setTopLevelNavigator(ref)}
      />
    );
  }
}

export default ScreenRoot;
