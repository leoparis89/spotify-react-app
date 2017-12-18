export const normalize = (ar) => {
  const res = {};
  for (let el of ar) {
    res[el.id] = el;
  }
  return res;
};
