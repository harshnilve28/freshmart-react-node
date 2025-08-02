import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Apple", price: 60, quantity: 0, image: "apple.jpg" },
  { id: 2, name: "Banana", price: 30, quantity: 0, image: "banana.jpg" },
  { id: 3, name: "Orange", price: 40, quantity: 0, image: "orange.jpg" },
  { id: 4, name: "Mango", price: 50, quantity: 0, image: "mango.jpg" },
  { id: 5, name: "Grapes", price: 70, quantity: 0, image: "grapes.jpg" },
  { id: 6, name: "Pineapple", price: 80, quantity: 0, image: "pineapple.jpg" }
];

function App() {
  const [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    let newList = [...productList];
    newList[index].quantity += 1;
    setProductList(newList);
  };

  const decrementQuantity = (index) => {
    let newList = [...productList];
    if (newList[index].quantity > 0) {
      newList[index].quantity -= 1;
      setProductList(newList);
    }
  };

  const cartTotal = productList.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  return (
    <div className="app-bg">
      <Navbar />
      <main className="container mt-5">
        <h2 className="mb-4 instamart-title">FreshMart</h2>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Cart total={cartTotal} />
      <Footer />
    </div>
  );
}

export default App;
