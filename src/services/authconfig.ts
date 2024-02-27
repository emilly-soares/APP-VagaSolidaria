import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const TOKEN_KEY = '@VAGASOLIDARIA/token';
export const USER = '@VAGASOLIDARIA/user';

export const isAuthenticated = (): boolean => Cookies.get(TOKEN_KEY) !== undefined;

export const getToken = (): string | undefined => Cookies.get(TOKEN_KEY);

export const login = (token: string, user: any): void => {
  Cookies.set(TOKEN_KEY, token, { expires: 1, secure: true, sameSite: 'strict' });
  Cookies.set(USER, JSON.stringify(user), { expires: 1, secure: true, sameSite: 'strict' });
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

export const getUserId = (): string | undefined => {
  const userString = Cookies.get(USER);
  if (userString) {
    const user = JSON.parse(userString);
    return user._id;
  }
  return undefined;
};

export const getUser = (): any => {
  const userString = Cookies.get(USER);
  if (userString) {
    return JSON.parse(userString);
  }
  return undefined;
};

export const logout = (): void => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(USER);
};