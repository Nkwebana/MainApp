/**
 *
 * NavigationManager
 *
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStoreActions } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductModule from 'productmodule-bn';

function NavigationManager({ products }) {
  const Stack = createNativeStackNavigator();

  const addCartItem = useStoreActions(
    (actions) => actions.cart.add
  );

  const addToCart = (cartInfo) => {
    addCartItem(cartInfo)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" options={{
          headerShown: false
        }}>
          {props => <ProductModule {...props} products={products} addToCart={addToCart} isParentNavigating={true} />}
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
