import http from './core';
interface IAPI {
  [prop: string]: any
}

export function login(data: ObjectParams) {
  return http.post('/login', data);
}

export function logout(data: ObjectParams) {
  return http.post('/logout', data);
}

export function upload(data: ObjectParams) {
  return http.post('/upload', data);
}

const APIs: IAPI = {
  login,
  logout,
  upload
};

export default APIs;
