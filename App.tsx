import React from "react";

/* Redux configuration */
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./src/redux/store";

/* Styles */
import { ThemeProvider } from "styled-components";
import { myTheme } from "./src/theme";

/* Screens Config */
import ScreenRoot from "./src/screens";

export default function App() {
  return (
    <StoreProvider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <ThemeProvider theme={myTheme}>
          <ScreenRoot />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
}
