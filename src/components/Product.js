import React from "react";
import "./Product.css";

export default function Product(props) {
  const { product, incrementQuantity, decrementQuantity, index } = props;

  return (
    <div className="card product-card shadow h-100">
      <img
        src={process.env.PUBLIC_URL + "/images/" + product.image}
        className="card-img-top product-img"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text price-text mb-2">
          <span className="badge bg-success fs-6">
            ₹{product.price}
          </span>
        </p>
        <div className="btn-group justify-content-center mb-2" role="group">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => decrementQuantity(index)}
            disabled={product.quantity === 0}
          >
            -
          </button>
          <button type="button" className="btn btn-light" disabled>
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => incrementQuantity(index)}
          >
            +
          </button>
        </div>
        <div className="product-total">
          <strong>Total:&nbsp;</strong>₹{product.price * product.quantity}
        </div>
      </div>
    </div>
  );
}
