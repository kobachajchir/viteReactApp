import { useNavigate } from "react-router-dom";

function ToCartButton() {
  const navigate = useNavigate();
  const goToCart = () => navigate("/cart");
  return (
    <button className="btn btn-success" onClick={goToCart}>
      Ir al carrito
    </button>
  );
}

export default ToCartButton;
