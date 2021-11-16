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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductModule from 'productmodule-bn';
import { View, Text, Button } from 'react-native'


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NavigationManager({ products }) {
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
