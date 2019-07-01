/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";

/* Native Base Theme Config */
import { StyleProvider } from "native-base";
import getNativeBaseStyle from "./native-base-theme/components";
import materialConfig from "./native-base-theme/variables/material";

/* Screens Config */
import ScreenRoot from "./src/screens";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={getNativeBaseStyle(materialConfig)}>
        <ScreenRoot />
      </StyleProvider>
    );
  }
}
