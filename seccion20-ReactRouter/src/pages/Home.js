import { Link } from 'react-router-dom'

const Homepage = () => {
  return <>
    <h2>Home page!</h2>
    <p> goTo <Link to="/products">Products page </Link></p>
  </>
};

export default Homepage