import { Link } from 'react-router-dom'

// import { useParams } from "react-router-dom";
const PRODUCTS = [
  { id: 'p1', title: 'product 1' },
  { id: 'p2', title: 'product 2' },
  { id: 'p3', title: 'product 3' }
]
const Products = () => {
  return <>
    <h2>Products page!</h2>
    {/* <p> goTo <a href="/">Main page </a></p>  go and make a refresh of the app*/}

    <ul>
      {PRODUCTS.map(x => {
        return <li key={x.id}>
          <Link to={`/products/${x.id}`}>{x.title}</Link>
        </li>
      })}


    </ul>
    <p> goTo <Link to="/">Products page </Link></p>
  </>
};

export default Products