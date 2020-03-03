import * as React from "react";
/* Native Components */
import { Text, TouchableOpacity } from "react-native";
/* Navigation */
import { useNavigation } from "@react-navigation/native";
/* UI Components */
import Layout from "../../../components/UI/Layout";

const Details = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Text>Screen Details</Text>

      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("AppHome")}
      >
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Details;
