import * as fetch from 'isomorphic-fetch';

interface IUser {
  userid: string;
  role: string;
};

export let AccessToken: string = localStorage.getItem('token') || null;
export let User: IUser = {
  userid: localStorage.getItem('userid') || null,
  role: localStorage.getItem('role') || null
};

export const json = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {

  let headers: { [key: string]: string } = {
    'Content-type': 'application/json'
  };

  if (AccessToken) {
    headers['Authorization'] = `Bearer ${AccessToken}`;
  }

  try {
    let response
      = await fetch(uri, {
        method,
        headers,
        body: JSON.stringify(body)
      });

    if (response.status === 401) {
      throw new Error('Token missing; check localStorage for Login Credentials');
    };

    if (response.status === 404) {
      throw new Error('Server Path not found; check Fetch path');
    };

    if (response
      .ok) {
      return <T>(await response.json());
    };
  } catch (error) {
    console.error(error.message);
  }
};


export const SetAccessToken = (
  token: string,
  user: IUser = { userid: undefined, role: 'admin' }
) => {
  AccessToken = token;
  User = user;

  localStorage.setItem('token', token);
  localStorage.setItem('userid', User.userid);
  localStorage.setItem('role', User.role);
};