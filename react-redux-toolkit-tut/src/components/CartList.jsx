import { useSelector } from "react-redux"

function CartList(){
       const cartSelector = useSelector((state)=>state.cart.items);
       console.log(cartSelector);
       
    return(
        <>
        <div className="cart-container">
            <div className="cart-header">
                <h1>Your Cart Items</h1>
                <span>{cartSelector.length} items</span>
            </div>
            {
                cartSelector.length > 0 ? cartSelector.map((item)=>(
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <img src={item.thumbnail}/>
                            <div className="cart-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className="item-actions">
                            <span className="price">{item.price}</span>
                            <button className="btn">Remove</button>
                        </div>
                    </div>
                ))
                :null
            }
            <div className="cart-footer">
                Total : ${cartSelector.reduce((sum,item)=>sum+item.price,0).toFixed(2)}
            </div>
        </div>
        </>
    )
}

export default CartList