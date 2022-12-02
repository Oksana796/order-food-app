import {useState} from 'react'

import Header from "./components/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler=()=> {
    setShowCart(true)
  }

  const hideCartHandler=()=> {
    setShowCart(false)
  }

  return (
    <>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
