export const getAuth = async () => {
  const token = localStorage.getItem('token');
  return token;
}