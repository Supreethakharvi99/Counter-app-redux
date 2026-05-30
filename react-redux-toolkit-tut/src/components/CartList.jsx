import { useDispatch, useSelector } from "react-redux"
// Now this import will find updateQuantity perfectly!
import { clearAllItem, removeItem, updateQuantity } from "../store/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleQuantityChange = (id, q) => {   
        let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
        dispatch(updateQuantity({ id, quantity }));
    }

    const handlePlaceOrder = ()=>{
        localStorage.clear();
        dispatch(clearAllItem());
        alert("Order Placed")
        navigate("/")
    }
        
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Your Cart Items</h1>
                <span>{cartItems.length} items</span>
            </div>
            
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <img src={item.thumbnail} alt={item.title} style={{ width: '80px' }} />
                            <div className="cart-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        
                        <div className="item-actions">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input 
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                                    value={item.quantity || 1} 
                                    style={{ margin: '15px', width: '60px' }} 
                                    type="number" 
                                />
                                <div>
                                    <span className="price" style={{ marginRight: '15px' }}>
                                        ${item.quantity ? (item.price * item.quantity).toFixed(2) : item.price.toFixed(2)}
                                    </span>
                                    <button onClick={() => dispatch(removeItem(item))} className="btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ padding: '20px', textAlign: 'center' }}>Your cart is empty.</p>
            )}
            
            <div className="cart-footer"> Total : ${cartItems.reduce((sum,item)=> item.quantity? sum+item.price*item.quantity:sum+item.price,0).toFixed(2)} </div>
            <button onClick={()=>handlePlaceOrder()} className="btn">Place Order</button>
        </div>
    )
}

export default CartList;