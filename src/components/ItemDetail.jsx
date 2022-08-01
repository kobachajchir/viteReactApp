import { ItemCounter } from "./ItemCounter";
import "./css/ItemDetail.css";

function ItemDetail(props) {
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
          <ItemCounter
            initial={1}
            stock={props.item.stock}
            productId={props.item.title}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
