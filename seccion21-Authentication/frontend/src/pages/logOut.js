import { redirect } from "react-router-dom";

export const action = async () => {
  localStorage.removeItem('token');
  
  return redirect('/')
}