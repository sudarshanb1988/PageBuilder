import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Main } from 'containers';  // eslint-disable-line import/no-unresolved,import/extensions
import reducers from 'stores/reducer.jsx';  // eslint-disable-line import/no-unresolved,import/extensions

const root = document.getElementById('page_builder_mount_point');
const store = createStore(reducers);

const renderApp = () => (
  <Provider store={store}>
    <AppContainer>
      <Main />
    </AppContainer>
  </Provider>
);

render(renderApp(), root);

if (module.hot) {
  module.hot.accept();
}
