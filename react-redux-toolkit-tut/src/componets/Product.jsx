import { useDispatch } from "react-redux"

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className='product-card'>
        <div className="product-image">
            <img src='https://m.media-amazon.com/images/I/61-g7m+90eL.jpg' alt='Product Image'/>
        </div>
        <div className="product-info">
            <h1>Wireless Headphones</h1>
            <p className='price'>$129.99</p>
            <p className="description">Experience gigh-quality sound with these wireless headphones. Featuring noise cancellation, long-lasting battery life, and a sleek modern design for everyday use.
            </p>
            <button onClick={()=>dispatch(AddToCart(1))} className='btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product