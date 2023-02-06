
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();

  return <>
    <h2>Product Detail page! product id: {param.productId}</h2>
  </>
};

export default ProductDetail