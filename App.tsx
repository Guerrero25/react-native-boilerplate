/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

/* Native Base Theme Config */
import { StyleProvider, Button } from "native-base";
import getNativeBaseStyle from "./native-base-theme/components";
import materialConfig from "./native-base-theme/variables/material";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={getNativeBaseStyle(materialConfig)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Button bordered>
            <Text>Click here!</Text>
          </Button>
        </View>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
