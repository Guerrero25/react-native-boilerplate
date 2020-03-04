import * as React from "react";
/* Navigation */
import { useNavigation } from "@react-navigation/native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
import Button from "../../../components/UI/Button";
import Text from "../../../components/UI/Text";

const Details = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Text>Screen Details</Text>

      <Button
        ghost
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("AppHome")}
      >
        Go to Home Screen
      </Button>
    </Layout>
  );
};

export default Details;
