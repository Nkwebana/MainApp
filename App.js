/**
 * MainApp
 */

import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { SafeAreaView } from 'react-native';

import { store } from './src/store';
import { CartItems } from './src/components';
import { NavigationManager } from './src/navigation';

function App() {
  const kingValidation = () => {};
  const validation = () => {};
  kingValidation();
  validation();
  if (validation) {
    const validation1 = 1;
    if (validation1) {
      return 1;
    }
  }

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
