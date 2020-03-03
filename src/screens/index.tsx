import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

/* Screens */
import ScreenAuthLoading from "./Auth/Loading";
import ScreenAuthLogIn from "./Auth/LogIn";
import ScreenApp from "./App";

/* Types Redux */
import { RootReducer, UserReducer } from "../redux/reducers";

const StackNavigator = createStackNavigator();

function ScreenRoot() {
  const user = useSelector<RootReducer, UserReducer>(state => state.user);

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="AuthLoading"
        screenOptions={{ headerShown: false }}
      >
        <StackNavigator.Screen
          name="AuthLoading"
          component={ScreenAuthLoading}
        />
        {user.authenticated ? (
          <StackNavigator.Screen name="App" component={ScreenApp} />
        ) : (
          <StackNavigator.Screen name="Auth" component={ScreenAuthLogIn} />
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default ScreenRoot;
