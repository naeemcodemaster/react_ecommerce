import React, { useContext } from 'react'
import Navbar from './Navbar'
import StripeCheckout from 'react-stripe-checkout'
import { CartContext } from '../Global/CartContext'
function Cart() {
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
    const handleToken = (token) => {
        console.log(token);
    }
    // console.log(data);
    return (
        <>
            <Navbar />
            <div className='container' style={{marginTop:'50px'}}>
                <div className='cart_details'>
                    <h2>Cart Details</h2>
                    {shoppingCart.length > 0 ?
                        shoppingCart.map((cart => (
                            <div className='cart' key={cart.id}>
                                <span className='cart_image'>
                                    <img src={cart.image} alt='Not found' />
                                </span>
                                <span className='cart_product'>{cart.name}</span>
                                <span className='cart_product_price'>{cart.price}</span>
                                <span className='dec' onClick={() => dispatch({ type: 'DECREMENT', id: cart.id, cart: cart })}>Dec</span>
                                <span className='product_qty'>{cart.qty}</span>
                                <span className='inc' onClick={() => dispatch({ type: 'INCREMENT', id: cart.id, cart: cart })}>Inc</span>
                                <span className='product_totalprice'>Total: {cart.price * cart.qty}</span>
                                <span className='delete_product'><button onClick={() => dispatch({ type: "DELETE", id: cart.id, cart: cart })}>Delete</button></span>
                            </div>
                        )))

                        : 'Sorry You cart is empty'}
                    <div className='summary'>
                        <span className='cart_summary'>Cart Summary</span>
                        <span className='product_totalqty'>Total Quatity: {qty}</span>
                        <span className='product_totalprice'>Total Price: {totalPrice}</span>
                        <span className='stripe_cart_btn'>
                            
                        </span>

                    </div>


                </div>

            </div>
        </>
    )


}

export default Cart
