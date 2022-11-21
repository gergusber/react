import Header from "./components/layout/header/Header";
import Meals from "./components/meals/Meals/Meals";
import Cart from "./components/cart/Cart/Cart"
import { useState } from "react";
import CartProvider from './store/CartProvider'

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
