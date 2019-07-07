import React from "react";

/* Native Base Theme Config */
import { StyleProvider } from "native-base";
import getNativeBaseStyle from "./native-base-theme/components";
import materialConfig from "./native-base-theme/variables/material";

/* Redux configuration */
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./src/redux/store";

/* Screens Config */
import ScreenRoot from "./src/screens";

export default function App() {
  return (
    <StoreProvider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <StyleProvider style={getNativeBaseStyle(materialConfig)}>
          <ScreenRoot />
        </StyleProvider>
      </PersistGate>
    </StoreProvider>
  );
}
