/**
 * MainApp
 */

import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { SafeAreaView } from 'react-native'

import { NavigationManager, CartItems } from './src/components'
import { store } from './src/store';

function MainApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        <NavigationManager />
        <CartItems />
      </StoreProvider>
    </SafeAreaView>
  );
}

export default MainApp;
