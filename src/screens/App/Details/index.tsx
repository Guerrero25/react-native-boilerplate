import * as React from "react";
import { TabBarIconProps } from "react-navigation";
/* Native Base Components */
import { Text, Button, Icon } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";

const Details = () => {
  return (
    <Layout>
      <Text>Screen Details</Text>

      <Button
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("AppHome")}
      >
        <Text>Go to Home Screen</Text>
      </Button>
    </Layout>
  );
};

Details.navigationOptions = {
  tabBarIcon: ({ focused }: TabBarIconProps) => (
    <Icon type="FontAwesome5" name="info-circle" active={focused} />
  )
};

export default Details;
