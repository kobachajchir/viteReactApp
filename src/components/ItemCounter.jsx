import "./css/ItemCounter.css";

export function ItemCounter(props) {
  const handleMinusOne = () => {
    props.quantity > 1 && props.modifyQuantity(props.quantity - 1);
  };
  const handlePlusOne = () => {
    props.quantity < props.stock && props.modifyQuantity(props.quantity + 1);
  };
  return (
    <div id={"itemCounter" + props.productId}>
      <div className="row input-group mb-3">
        <button className="quantityButton col-2" onClick={handleMinusOne}>
          <i className="bi bi-dash-lg"></i>
        </button>
        <label className="col-md-4 col-8 text-center form-control">
          {props.quantity}
        </label>
        <button className="quantityButton col-2" onClick={handlePlusOne}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <div className="w-100"></div>
      <div className="col-12 row justify-content-center">
        <a className="btn btn-danger addToCart col-6" onClick={props.addToCart}>
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}
