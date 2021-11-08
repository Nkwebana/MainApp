/**
 *
 * User
 *
 */

import { action } from 'easy-peasy';

export const moduleStore = {
  moduleInfo: {},
  add: action((state, payload) => {
    state.moduleInfo = payload;
  }),
};
