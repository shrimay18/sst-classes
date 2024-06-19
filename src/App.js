import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState({});
  function increaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.id]){
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0

        //or
        // ...product
        // quantity: 0
      };
    }
    newCart[product.id].quantity++;
    setCart(newCart);
  }
  function decreaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.id]){
      return;
    }
    if(newCart[product.id]){
      newCart[product.id].quantity--;
      if(newCart[product.id].quantity === 0){
        delete newCart[product.id];
      }
      setCart(newCart);
    }
  } 
  console.log(a, b);
  return (
    <div className="App">
      <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  );
}

export default App;
