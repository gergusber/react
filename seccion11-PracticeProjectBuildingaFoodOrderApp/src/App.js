import Header from "./components/layout/header/Header";
import Meals from "./components/meals/Meals/Meals";
import Cart from "./components/cart/Cart/Cart"
import { useState } from "react";

const App = () => {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart  onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
