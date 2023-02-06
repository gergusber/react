import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {

  const navigate = useNavigate();


  const navigateHandler = () => {
    navigate('/products')// navigate programatically
  }
  return <>
    <h2>Home page!</h2>
    <p> goTo <Link to="/products">Products page </Link></p>

    <button onClick={navigateHandler}>Navigate</button>
  </>
};

export default Homepage