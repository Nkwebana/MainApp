import { createStore } from 'easy-peasy';
import { composeWithDevTools } from 'remote-redux-devtools';

import { moduleStore } from './ModuleStore';
import { cart } from './Cart';

export const store = createStore(
  {
    moduleStore,
    cart,
  },
  {
    compose: composeWithDevTools({ realtime: true, trace: true }),
  }
);
