import React from 'react';
import { useStoreState } from 'easy-peasy';

import {
  StyledCart,
  StyledCartIcon,
  StyledImage,
  StyledCounter
} from './styledComponents';

function Cart() {
  const cartItems = useStoreState((state) => state.cart.cartProducts);

  return (
    <StyledCart >
      <StyledCartIcon>
        <StyledImage source={require('../../assests/cart.png')} />
        <StyledCounter>{cartItems.length}</StyledCounter>
      </StyledCartIcon>
    </StyledCart>
  );
}

export default Cart;
