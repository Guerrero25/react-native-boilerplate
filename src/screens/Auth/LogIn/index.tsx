import * as React from "react";
/* Native Base Components */
import { Text, Button } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Service */
import NavigationService from "../../../services/NavigationService";

export interface ScreenLoginProps {}

const ScreenLogin: React.SFC<ScreenLoginProps> = () => {
  return (
    <Layout>
      <Text>Screen Login</Text>

      <Button
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("App")}
      >
        <Text>Login</Text>
      </Button>
    </Layout>
  );
};

export default ScreenLogin;
