import React from "react";

/* Native Base Theme Config */
import { StyleProvider } from "native-base";
import getNativeBaseStyle from "./native-base-theme/components";
import materialConfig from "./native-base-theme/variables/material";

/* Redux configuration */
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";

/* Screens Config */
import ScreenRoot from "./src/screens";

export default function App() {
  return (
    <StoreProvider store={store}>
      <StyleProvider style={getNativeBaseStyle(materialConfig)}>
        <ScreenRoot />
      </StyleProvider>
    </StoreProvider>
  );
}
