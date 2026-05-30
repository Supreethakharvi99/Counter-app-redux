import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state)=>state.cart.items);
  console.log(cartSelector.length);
  
  return (
    <div className="cart">
      <img
        src="https://fonts.gstatic.com/s/i/materialiconsoutlined/shopping_cart/v1/24px.svg"
        className="cart-icon"
        alt="cart"
      />
      <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
    </div>
  );
};

export default AddToCart;
