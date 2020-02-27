import * as React from "react";
import { TabBarIconProps } from "react-navigation";
/* Native Base Components */
import { Text, TouchableOpacity } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
import TabBarIcon from "../../../components/UI/TabBarIcon";
/* Services */
import NavigationService from "../../../services/NavigationService";

const Home = () => {
  return (
    <Layout>
      <Text>Screen Home</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("Auth")}
      >
        <Text>Go to Login Screen</Text>
      </TouchableOpacity>
    </Layout>
  );
};

Home.navigationOptions = {
  tabBarIcon: (tabBarIconProps: TabBarIconProps) => (
    <TabBarIcon name="home" {...tabBarIconProps} />
  )
};

export default Home;
