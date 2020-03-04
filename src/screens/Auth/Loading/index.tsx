import * as React from "react";
import { useEffect } from "react";
/* Redux */
import { useSelector } from "react-redux";
import { RootReducer, UserReducer } from "../../../redux/reducers";
/* Native Base Components */
import { Text } from "react-native";
/* Navigation */
import { useNavigation } from "@react-navigation/native";
/* UI Components */
import Layout from "../../../components/UI/Layout";

export interface ScreenLoadingProps {}

const ScreenLoading: React.SFC<ScreenLoadingProps> = () => {
  const navigation = useNavigation();
  const user = useSelector<RootReducer, UserReducer>(state => state.user);

  useEffect(() => {
    navigation.replace(user.authenticated ? "App" : "Auth", {});
  }, []);

  return (
    <Layout>
      <Text>Screen Loading</Text>
      <Text>Loading...</Text>
    </Layout>
  );
};

export default ScreenLoading;
