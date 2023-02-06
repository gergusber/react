import { Link } from 'react-router-dom'

const Homepage = () => {
  return <>
    <h1>Home page!</h1>
    <p> goTo <Link to="/products">Products page </Link></p>
  </>
};

export default Homepage