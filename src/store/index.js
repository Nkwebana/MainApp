import { createStore } from 'easy-peasy';
import { composeWithDevTools } from 'remote-redux-devtools';
import { moduleStore } from './ModuleStore';

export const store = createStore(
  {
    moduleStore,
  },
  {
    compose: composeWithDevTools({ realtime: true, trace: true }),
  }
);
