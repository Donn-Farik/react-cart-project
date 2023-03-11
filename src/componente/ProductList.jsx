import React from "react";
import { data } from "../data";

function ProductList({
  allProduct,
  setAllProduct,
  countProduct,
  setCountProduct,
  total,
  setTotal,
}) {
  const onAddProduct = (product) => {
    if (allProduct.find((item) => item.id === product.id)) {
      const products = allProduct.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProduct(countProduct + product.quantity);
      return setAllProduct([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProduct(countProduct + product.quantity);
    setAllProduct([...allProduct, product]);
    console.log(allProduct);
  };
  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
