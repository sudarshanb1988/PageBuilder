export const ADD_PAGE_DATA = 'ADD_PAGE_DATA';

export const ComponentTreeAction = {
  addPageData: (data) => {
    return ({ type: ADD_PAGE_DATA, data });
  }
};
