import * as React from "react";
/* Native Base Components */
import { Text, TouchableOpacity } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Redux */
import { useActions } from "../../../hooks";
import { logout } from "../../../redux/actions/user";

const Home = () => {
  const logoutAction = useActions(logout);

  return (
    <Layout>
      <Text>Screen Home</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => {
          logoutAction();
        }}
      >
        <Text>Go to Login Screen</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Home;
