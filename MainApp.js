/**
 * MainApp
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { StoreProvider } from 'easy-peasy';

import Home from './src/components/Home';
import { store } from './src/store';

function MainApp() {
  return (
    <SafeAreaView>
      <StoreProvider store={store}>
        <Home />
      </StoreProvider>
    </SafeAreaView>
  );
}

export default MainApp;
