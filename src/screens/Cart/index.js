/**
 *
 * Cart
 *
 */

import React from 'react';
import { View, Text } from 'react-native';
// Import PropTypes from 'prop-types';

function Cart() {
  return (
    <View>
      <Text>Hellow Card</Text>
    </View>
  );
}

Cart.navigationOptions = {
  title: 'Cart',
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
