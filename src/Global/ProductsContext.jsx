import React, { createContext, useState } from "react"
import p1 from '../products/men/product1.jpg'
import p2 from '../products/men/product2.jpg'
import p3 from '../products/men/product3.jpg'
import p4 from '../products/men/product4.jpg'
import p5 from '../products/women/product1.jpg'
import p6 from '../products/women/product2.jpg'
import p7 from '../products/women/product3.jpg'
import p8 from '../products/women/product4.jpg'
export const ProductsContext = createContext();
const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: 'product 1', price: 100, image: p1, status: 'hot' },
        { id: 2, name: 'product 2', price: 200, image: p2, status: 'hot' },
        { id: 3, name: 'product 3', price: 300, image: p3, status: 'hot' },
        { id: 4, name: 'product 4', price: 400, image: p4, status: 'new' },
        { id: 5, name: 'product 5', price: 500, image: p5, status: 'hot' },
        { id: 6, name: 'product 6', price: 600, image: p6, status: 'hot' },
        { id: 7, name: 'product 7', price: 700, image: p7, status: 'hot' },
        { id: 8, name: 'product 8', price: 800, image: p8, status: 'hot' }
    ]);
    return (

        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    );
}
export default ProductContextProvider;