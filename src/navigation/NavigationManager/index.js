/**
 *
 * NavigationManager
 *
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { useStoreActions } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductModule, { ProductDetail } from 'productmodule-bn';
import Login from 'modulea-bn';

function NavigationManager({
  products = [
    {
      id: 1,
      productName: 'Chicken',
      productPrice: 75,
      productImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0205-portrait-pf-1567089281.jpg?crop=1.00xw:0.667xh;0,0.150xh&resize=768:*',
      productSize: '500ml',
      productDescription: 'This is coolest product ever.',
    },
    {
      id: 2,
      productName: 'Coffee',
      productPrice: 50,
      productImage:
        'https://joya.info/images/content/438914-1200x700c56x50-Kaffee-mit-pflanzlicher-Milch-Barista_1200x798.jpg',
      productSize: '500ml',
      productDescription: 'This is coolest product ever.',
    },
  ],
}) {
  const Stack = createNativeStackNavigator();
  const containerRef = createRef();
  const addCartItem = useStoreActions((actions) => actions.cart.add);

  const addToCart = (cartInfo) => {
    addCartItem(cartInfo);
  };

  const navigate = (name, params) => {
    containerRef.current && containerRef.current.navigate(name, params);
  };

  const handleLogin = ({ username, password }) => {
    //Should be uploaded to AsyncStorage
    if (username === 'A' && password === '1') {
      navigate('Products');
    }
  };

  return (
    <NavigationContainer ref={containerRef}>
      <Stack.Navigator initialRouteName="Login Screen">
        <Stack.Screen name="Login Screen">
          {(props) => <Login {...props} handleLogin={handleLogin} />}
        </Stack.Screen>

        <Stack.Screen name="Products">
          {(props) => (
            <ProductModule
              {...props}
              products={products}
              addToCart={addToCart}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Product Details" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NavigationManager.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default NavigationManager;
