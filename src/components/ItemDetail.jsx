import { ItemCounter } from "./ItemCounter";
import { useState } from "react";
import "./css/ItemDetail.css";
import ToCartButton from "./ToCartButton";

function ItemDetail(props) {
  const [count, setCount] = useState(0);
  const [mountItemCounter, setMountItemCounter] = useState(true);
  function handleAddToCart(evt) {
    setMountItemCounter(false);
  }
  return (
    <>
      <div className="col-12 col-md-6 imageDetailContainer">
        <img src={props.item.pictureUrl} className="itemDetailImg" alt="..." />
      </div>
      <div className="col-md-6 col-12 row">
        <div className="itemDetailContainer col-12">
          <h2 className="titleDetail">{props.item.title}</h2>
          <h5 className="priceDetail">${props.item.price}</h5>
          <p className="descriptionDetail">{props.item.description}</p>
          {mountItemCounter ? (
            <ItemCounter
              stock={props.item.stock}
              productId={props.item.id}
              addToCart={handleAddToCart}
              modifyQuantity={setCount}
              quantity={count}
            />
          ) : (
            <ToCartButton />
          )}
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
