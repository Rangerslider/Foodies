import React from 'react';
import '../Context/Cart.css';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="image" src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}