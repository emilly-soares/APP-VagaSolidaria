import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const TOKEN_KEY = '@VAGASOLIDARIA/token';
export const USER_ID = '@VAGASOLIDARIA/user';

export const isAuthenticated = (): boolean => Cookies.get(TOKEN_KEY) !== undefined;

export const getToken = (): string | undefined => {
  const token = Cookies.get(TOKEN_KEY);
  console.log('Token:', token);
  return token;
};

export const getUserId = (): string | undefined => Cookies.get(USER_ID);

export const login = (token: string, user: any): void => {
  Cookies.set(TOKEN_KEY, token, { expires: 1, secure: true, sameSite: 'strict' });
  Cookies.set(USER_ID, JSON.stringify(user), { expires: 1, secure: true, sameSite: 'strict' });
};

export const isTokenExpired = (): boolean => {
  try {
    const token = getToken();
    if (!token) return true;

    const decoded: any = jwtDecode(token);
    const currentDate = Math.floor(Date.now() / 1000);

    return decoded.exp < currentDate;
  } catch (err) {
    console.log('Error while checking token expiration:', err);
    return true;
  }
};

export const getRoleUser = (): string | undefined => {
  const token = getToken();
  if (!token) return undefined;

  try {
    const decoded: any = jwtDecode(token);
    return decoded.role; 
  } catch (err) {
    console.log('Error decoding token:', err);
    return undefined;
  }
};

export const logout = (): void => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(USER_ID);
};