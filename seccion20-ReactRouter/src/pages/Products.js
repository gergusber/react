import { Link } from 'react-router-dom'

const Products = () => {
  return <>
    <h2>Products page!</h2>
    {/* <p> goTo <a href="/">Main page </a></p>  go and make a refresh of the app*/}

    <ul>
      <li>product 1 </li>
      <li>product 2 </li>
      <li>product 3 </li>
    </ul>
    <p> goTo <Link to="/">Products page </Link></p>
  </>
};

export default Products