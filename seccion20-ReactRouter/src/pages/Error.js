import { Link } from 'react-router-dom'
import {
  Outlet
} from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';
import classes from './Error.module.css';


const ErrorPage = () => {
  return <>
    <MainNavigation />
    <main >
      <h1> Error ocurred</h1>
      <p> could not find this page</p>
    </main>
  </>
};

export default ErrorPage