import "./css/CartWidget.css";

const CartWidget = (props) => {
  return (
    <a href="">
      <i className="bi bi-cart3">&nbsp;{props.items}&nbsp;</i>
    </a>
  );
};

export default CartWidget;
