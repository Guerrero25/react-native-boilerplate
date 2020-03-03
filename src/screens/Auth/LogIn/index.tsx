import * as React from "react";
/* Native Base Components */
import { Text, TouchableOpacity } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Redux */
import { useActions } from "../../../hooks";
import { login } from "../../../redux/actions/user";

export interface ScreenLoginProps {}

const ScreenLogin: React.SFC<ScreenLoginProps> = () => {
  const loginAction = useActions(login);

  return (
    <Layout>
      <Text>Screen Login</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => {
          loginAction({});
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default ScreenLogin;
