import * as React from "react";
/* Native Base Components */
import { Text, Button } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Layout>
      <Text>Screen Home</Text>

      <Button
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("Auth")}
      >
        <Text>Logout</Text>
      </Button>
    </Layout>
  );
};

export default Home;
