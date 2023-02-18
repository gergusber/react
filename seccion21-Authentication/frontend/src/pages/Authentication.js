import AuthForm from '../components/AuthForm';
import { json, redirect } from "react-router-dom";


function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode') || 'login';
  if (mode !== 'login' && mode !== 'signup')
    throw json({ message: 'Unsupported mode' }, { status: 422 });

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const authData = { email, password }
  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'could not authenticate user.' }, { status: 500 });
  }

  const responseData = await response.json();
  const { token } = responseData;
  localStorage.setItem('token', token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1)

  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
};