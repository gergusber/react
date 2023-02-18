export const getAuth = () => {
  const token = localStorage.getItem('token');
  return token;
}

export const loader = () => {
  return getAuth();
}