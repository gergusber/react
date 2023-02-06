import { Link } from 'react-router-dom'

const Products = () => {
  return <>
  <h2>Products page!</h2>
  {/* <p> goTo <a href="/">Main page </a></p>  go and make a refresh of the app*/}
  <p> goTo <Link to="/">Products page </Link></p>
</>
};

export default Products