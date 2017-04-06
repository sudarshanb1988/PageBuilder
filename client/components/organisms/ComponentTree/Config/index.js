const req = require.context('.');
req.keys().forEach((key) => {
  const componentName = key.replace('.js', '').replace('./', '');
  module.exports[componentName] = req(key).default;
});
