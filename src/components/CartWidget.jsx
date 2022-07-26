import "./css/CartWidget.css";

const CartWidget = (props) => {
  return <i className="bi bi-cart3">&nbsp;{props.items}&nbsp;</i>;
};

export default CartWidget;
