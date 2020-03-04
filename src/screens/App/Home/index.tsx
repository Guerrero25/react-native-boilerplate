import * as React from "react";
/* UI Components */
import Layout from "../../../components/UI/Layout";
import Button from "../../../components/UI/Button";
import Text from "../../../components/UI/Text";
/* Redux */
import { useActions } from "../../../hooks";
import { logout } from "../../../redux/actions/user";

const Home = () => {
  const logoutAction = useActions(logout);

  return (
    <Layout>
      <Text>Screen Home</Text>

      <Button
        onPress={() => {
          logoutAction();
        }}
      >
        Go to Login Screen
      </Button>
    </Layout>
  );
};

export default Home;
