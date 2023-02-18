import { redirect } from 'react-router-dom'


export const getAuth = () => {
  const token = localStorage.getItem('token');
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