import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state)=>state.cart.value);
  console.log(selector);
  
  return (
    <div className="cart">
      <img
        src="https://fonts.gstatic.com/s/i/materialiconsoutlined/shopping_cart/v1/24px.svg"
        className="cart-icon"
        alt="cart"
      />
      <span className="cart-count">{selector}</span>
    </div>
  );
};

export default AddToCart;
