import * as React from "react";
/* Native Base Components */
/* UI Components */
import Layout from "../../../components/UI/Layout";
import Button from "../../../components/UI/Button";
import Text from "../../../components/UI/Text";
/* Redux */
import { useActions } from "../../../hooks";
import { login } from "../../../redux/actions/user";

export interface ScreenLoginProps {}

const ScreenLogin: React.SFC<ScreenLoginProps> = () => {
  const loginAction = useActions(login);

  return (
    <Layout>
      <Button
        block
        style={{ marginBottom: 10, marginTop: 10 }}
        onPress={() => {
          loginAction({});
        }}
      >
        Sing up
      </Button>

      <Button
        ghost
        block
        onPress={() => {
          loginAction({});
        }}
      >
        Login
      </Button>
    </Layout>
  );
};

export default ScreenLogin;
