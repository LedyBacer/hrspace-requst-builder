export const BASE_URL = "http://185.221.162.231/api/v1";

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status}`));

// const checkSuccess = (res) =>
//   res && res.success
//     ? res
//     : Promise.reject(new Error(`Ответ не success: ${res}`));

export function request(endpoint, options = {}) {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);
  // .then(checkSuccess);
}
