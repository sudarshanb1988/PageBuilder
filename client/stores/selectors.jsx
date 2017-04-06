const req = require.context('.', true, /\.\/.+\/selectors\.jsx$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/selectors\.jsx/, '$1');
  if (componentName) {
    module.exports[`${componentName}Selector`] = req(key);
  }
});
