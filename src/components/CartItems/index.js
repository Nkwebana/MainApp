import React from 'react';
import { useStoreState } from 'easy-peasy';

import {
  StyledCart,
  StyledCartIcon,
  StyledImage,
  StyledCounter
} from './styledComponents';

function CartItems() {
  const cartItems = useStoreState((state) => state.cart.cartProducts);

  const handleCartAction = () => { }


  return (
    <StyledCart onPress={() => handleCartAction()}>
      <StyledCartIcon>
        <StyledImage source={require('../../assests/cart.png')} />
        <StyledCounter>{cartItems.length}</StyledCounter>
      </StyledCartIcon>
    </StyledCart>
  );
}

export default CartItems;
