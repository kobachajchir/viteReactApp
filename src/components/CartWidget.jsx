import "./css/CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = (props) => {
  return (
    <Link to={"/cart"}>
      <i className="bi bi-cart3">&nbsp;{props.items}&nbsp;</i>
    </Link>
  );
};

export default CartWidget;
