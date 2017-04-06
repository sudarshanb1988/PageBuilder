import { combineReducers } from 'redux';

const req = require.context('.', true, /\.\/.+\/reducer\.jsx$/);
const reducers = {};
req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
