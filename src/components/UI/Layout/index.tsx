import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";

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
