/**
 * MainApp
 */

import React from 'react';
import { StoreProvider } from 'easy-peasy';

import Home from './src/components/Home';
import { store } from './src/store';

function MainApp() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}

export default MainApp;
