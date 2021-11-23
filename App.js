/**
 * MainApp
 */

import React from "react";
import { StoreProvider } from "easy-peasy";
import { SafeAreaView } from "react-native";

import { store } from "./src/store";
import { CartItems, NavigationManager } from "./src/components";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        <NavigationManager />
        <CartItems />
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
