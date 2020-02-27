import * as React from "react";
import { TabBarIconProps } from "react-navigation";
/* Native Components */
import { Text, TouchableOpacity } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
import TabBarIcon from "../../../components/UI/TabBarIcon";
/* Services */
import NavigationService from "../../../services/NavigationService";

const Details = () => {
  return (
    <Layout>
      <Text>Screen Details</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("AppHome")}
      >
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </Layout>
  );
};

Details.navigationOptions = {
  tabBarIcon: (tabBarIconProps: TabBarIconProps) => (
    <TabBarIcon name="info-circle" {...tabBarIconProps} />
  )
};

export default Details;
