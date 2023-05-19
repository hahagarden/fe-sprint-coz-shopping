export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (data) => {
  return JSON.parse(localStorage.getItem(data));
};
