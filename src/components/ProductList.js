import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div className="row">
      {props.productList.map((product, i) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
          <Product
            product={product}
            index={i}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
          />
        </div>
      ))}
    </div>
  );
}
