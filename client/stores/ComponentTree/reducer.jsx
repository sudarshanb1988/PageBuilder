import { ADD_PAGE_DATA } from './actions.jsx';  // eslint-disable-line import/no-unresolved,import/extensions
import { initialState } from './selectors.jsx';  // eslint-disable-line import/no-unresolved,import/extensions

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE_DATA:
      return {
        ...state,
        contents: action.data
      };
    default:
      return state;
  }
};
