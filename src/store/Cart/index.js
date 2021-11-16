/**
 *
 * ModuleStore
 *
 */

import { action } from 'easy-peasy';

export const cart = {
  cartProducts: [],
  add: action((state, payload) => {
    state.cartProducts.push(payload);
  }),
};
