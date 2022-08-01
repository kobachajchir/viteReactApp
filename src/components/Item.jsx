import { ItemCounter } from "./ItemCounter";

function Item(props) {
  return (
    <div className="card col-6 offset-3 offset-md-0 col-md" key={props.index}>
      <img src={props.item.pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ItemCounter
          initial={1}
          stock={props.item.stock}
          productId={props.item.title}
        />
      </div>
    </div>
  );
}

export default Item;
