
export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, qty } = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id);
            if (check) {
                return state;
            } else {
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return { shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, qty: updatedQty }
            }
            break;
        case 'INCREMENT':
            // console.log("Increment")
            product = action.cart;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            updatedQty = qty + 1;
            index = shoppingCart.findIndex(cart => cart.id === action.id)
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            break;
        case 'DECREMENT':
            product = action.cart;
            // console.log('delete');
            if(product.qty > 1){
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.price;
                updatedQty = qty - 1;
                index = shoppingCart.findIndex(cart => cart.id === action.id)
                shoppingCart[index] = product;
            }else{
                return state;
            }
           
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            break;
        case 'DELETE':
            console.log("Deleted");
            
            const filtered = shoppingCart.filter((product)=>{
                return product.id !== action.id
            });
            product = action.cart;
            updatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.price * product.qty;
            return {shoppingCart: [...filtered],totalPrice:updatedPrice,qty:updatedQty}
            break;
        default:
            return state;
    }

}

