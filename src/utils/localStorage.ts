export const saveLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "null");
};
export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
