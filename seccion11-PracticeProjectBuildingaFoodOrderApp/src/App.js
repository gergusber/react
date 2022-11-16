import Header from "./components/layout/header/Header";
import Meals from "./components/meals/Meals/Meals";
import Cart from "./components/cart/Cart/Cart"

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
