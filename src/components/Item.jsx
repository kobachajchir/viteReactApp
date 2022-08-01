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
        <div className="col-12 row justify-content-center">
          <a href="#" className="btn btn-primary seeProductInfo col-6">
            Ver producto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
