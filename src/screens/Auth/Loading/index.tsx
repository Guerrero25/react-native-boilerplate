import * as React from "react";
import { useEffect } from "react";
/* Native Base Components */
import { Text } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";

export interface ScreenLoadingProps {}

const ScreenLoading: React.SFC<ScreenLoadingProps> = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate("App");
    }, 1500);
  }, []);

  return (
    <Layout>
      <Text>Screen Loading</Text>
      <Text>Loading...</Text>
    </Layout>
  );
};

export default ScreenLoading;
