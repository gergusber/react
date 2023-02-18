import { redirect } from 'react-router-dom'


export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration
}

export const getAuth = () => {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();

  if (!token)
    return null;

  if (tokenDuration < 0)
    return 'EXPIRED'

  return token;
}

export const loader = () => {
  return getAuth();
}

export const checkAuthLoader = () => {
  const token = getAuth();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}