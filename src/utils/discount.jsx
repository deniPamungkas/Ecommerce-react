export const discPrice = (e, f) => {
  const disc = parseInt(e);
  const result = (f * disc) / 100;
  return result;
};
