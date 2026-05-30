import { createSlice } from '@reduxjs/toolkit'

const getInitialCart = () => {
    const savedCart = localStorage.getItem('cart');
  
    if (savedCart && savedCart !== "undefined") {
        try {
            return JSON.parse(savedCart);
        } catch (error) {
            console.error("Failed to parse cart from localStorage:", error);
            return []; 
        }
    }
    return [];
}

const initialState = {
    items: getInitialCart()
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log(action)
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
       
        removeItem: (state, action) => {
            const cartData = state.items.filter(item => item.id !== action.payload.id)
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(cartData))
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearAllItem: (state) => {
            state.items = []; // Fixed: updated state.items instead of state.value
            
        }
    }
})

export const { addItem, removeItem, updateQuantity,clearAllItem } = addToCart.actions
export default addToCart.reducer