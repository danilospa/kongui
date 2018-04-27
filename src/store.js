import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

store.subscribe(() => {
  localStorage.setItem('authToken', store.getState().session.authToken || '');
});

export default store;
