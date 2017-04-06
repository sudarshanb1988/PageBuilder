export const initialState = {
  data: [{
    component: 'page',
    children: []
  }]
};

export const getPageData = (state = initialState) => {
  return Object.assign([], state.data);
};
