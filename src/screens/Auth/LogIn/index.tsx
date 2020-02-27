import * as React from "react";
/* Native Base Components */
import { Text, TouchableOpacity } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Service */
import NavigationService from "../../../services/NavigationService";

export interface ScreenLoginProps {}

const ScreenLogin: React.SFC<ScreenLoginProps> = () => {
  return (
    <Layout>
      <Text>Screen Login</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("App")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default ScreenLogin;
