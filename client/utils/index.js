const deepCopy = (obj) => {
  if (obj && typeof obj === 'object') {
    return JSON.parse(JSON.stringify(obj));
  }
  return obj;
};
export {
  deepCopy
};
