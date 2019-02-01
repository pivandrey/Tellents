import axios from 'axios';
import * as TYPES from './types';

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function getAuth() {
  const token = getCookie('authHeaders');
  return JSON.parse(token);
};

export const http = function() {
  const auth = getAuth();

  const headers = {
    uid: auth.uid,
    ['access-token']: auth['access-token'],
    client: auth.client,
    ['token-type']: auth['token-type'],
  };

  const instance = axios.create({
    baseURL: TYPES.API_BASE_URL,
    headers,
  });

  return instance;
};

