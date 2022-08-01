import { useState } from "react";
import "./css/ItemCounter.css";

export function ItemCounter(props) {
  const [count, setCount] = useState(props.initial);
  let max = props.stock;
  const comprar = (item, cant) => {
    console.log("Compro " + cant + " de " + item);
  };
  return (
    <>
      <div className="row input-group mb-3">
        <button
          className="quantityButton col-2"
          onClick={() => {
            count > 1 && setCount(count - 1);
          }}
        >
          <i className="bi bi-dash-lg"></i>
        </button>
        <label className="col-md-4 col-8 text-center form-control">
          {count}
        </label>
        <button
          className="quantityButton col-2"
          onClick={() => {
            count < props.stock && setCount(count + 1);
          }}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <div className="w-100"></div>
      <div className="col-12 row justify-content-center">
        <a
          href="#"
          className="btn btn-primary addToCart col-6"
          onClick={() => comprar(props.productId, count)}
        >
          Agregar al carrito
        </a>
      </div>
    </>
  );
}
