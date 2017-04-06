import React from 'react';

import { ComponentTree, ComponentBuilder } from 'containers';  // eslint-disable-line import/no-unresolved,import/extensions


const MainApp = (props) => {
  if (!props) {
    return null;
  }
  const style = {
    height: '100%'
  };
  return (
    <div style={style}>
      <ComponentBuilder {...props} />
      <ComponentTree {...props} />
    </div>
  );
};

export default MainApp;
