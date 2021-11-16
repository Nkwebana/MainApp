/**
 *
 * NavigationManager
 *
 */

import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { useStoreActions } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductModule from 'productmodule-bn';
import Login from 'modulea-bn';

function NavigationManager({ products }) {
  const Stack = createNativeStackNavigator();
  const containerRef = createRef();

  const addCartItem = useStoreActions(
    (actions) => actions.cart.add
  );

  const addToCart = (cartInfo) => {
    addCartItem(cartInfo)
  }

  const navigate = (name, params) => {
    containerRef.current && containerRef.current.navigate(name, params);
  };

  const handleLogin = (loginData) => {
    navigate('Products')
    console.log('loginData: ', loginData); //Should be uploaded to AsyncStorage
  }

  return (
    <NavigationContainer ref={containerRef}>
      <Stack.Navigator initialRouteName="Login Screen">
        <Stack.Screen name="Products" options={{
          headerShown: false,
        }}>
          {props => <ProductModule {...props} products={products} addToCart={addToCart} isParentNavigating={true} />}
        </Stack.Screen>

        <Stack.Screen name="Login Screen">
          {props => <Login {...props} handleLogin={handleLogin} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

ProductModule.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default NavigationManager;
