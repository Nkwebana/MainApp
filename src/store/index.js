import { createStore } from 'easy-peasy';
import { composeWithDevTools } from 'remote-redux-devtools';

import { cart } from './Cart';

export const store = createStore(
  {
    cart,
  },
  {
    compose: composeWithDevTools({ realtime: true, trace: true }),
  }
);
