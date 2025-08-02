import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer.js";
import React,{useState} from "react";

function App() {
  const initialProducts = [
    { id: 1, name: "Apple", price: 60, quantity: 0 },
    { id: 2, name: "Banana", price: 30, quantity: 0 },
    { id: 3, name: "Orange", price: 40, quantity: 0 },
    { id: 4, name: "Mango", price: 50, quantity: 0 },
    { id: 5, name: "Grapes", price: 70, quantity: 0 },
    { id: 6, name: "Pineapple", price: 80, quantity: 0 },
  ];
  let [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} incrementQuantity={incrementQuantity} />
      </main>
      <Footer />
    </>
  );
}

export default App;
