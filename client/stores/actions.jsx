const req = require.context('.', true, /\.\/.+\/actions\.jsx$/);

req.keys().forEach((key) => {
  const actions = req(key);
  const names = Object.keys(actions);
  names.map((name) => {
    module.exports[name] = actions[name];
  });
});
