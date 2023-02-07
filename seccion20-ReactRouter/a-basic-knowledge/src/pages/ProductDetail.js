
import { useParams, Link } from "react-router-dom";

const PRODUCTS = [
  { id: 'p1', title: 'product 1' },
  { id: 'p2', title: 'product 2' },
  { id: 'p3', title: 'product 3' }
]
const ProductDetail = () => {
  const param = useParams();
  const product = PRODUCTS.find(x => x.id === param.productId);
  return <>
    <h2>Product Detail page! product id: { product.id}, title: {product.title}</h2>
    <p>  <Link to="..">back </Link></p>

  </>
};

export default ProductDetail