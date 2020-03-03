import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* Screens */
import ScreenAppHome from "./Home";
import ScreenAppDetails from "./Details";

/* Components */
import TabBarIcon from "../../components/UI/TabBarIcon";

const Tab = createBottomTabNavigator();

function ScreenApp() {
  return (
    <Tab.Navigator
      initialRouteName="AppHome"
      tabBarOptions={{
        style: {
          paddingHorizontal: 7,
          paddingVertical: 5,
          height: 64,
          alignItems: "center"
        },
        showLabel: false,
        tabStyle: { padding: 5 }
      }}
    >
      <Tab.Screen
        name="AppHome"
        component={ScreenAppHome}
        options={{
          tabBarIcon: tabBarIconProps => (
            <TabBarIcon name="home" {...tabBarIconProps} />
          )
        }}
      />
      <Tab.Screen
        name="AppDetails"
        component={ScreenAppDetails}
        options={{
          tabBarIcon: tabBarIconProps => (
            <TabBarIcon name="info-circle" {...tabBarIconProps} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default ScreenApp;
