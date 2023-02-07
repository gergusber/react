import classes from './MainNavigation.module.css';
import { Link, useNavigate } from 'react-router-dom'


function MainNavigation() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/event')// navigate programatically
  }
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
             <Link to="/">Home </Link>  
          </li>
          <li>
             <Link to="events">Events </Link>  
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
