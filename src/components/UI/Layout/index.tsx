import * as React from "react";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";
/* Native Base Components */
import { View } from "native-base";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
