import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext';
import { Link, NavLink } from 'react-router-dom'
const Products = () => {
  const { products } = useContext(ProductsContext)
  const { dispatch } = useContext(CartContext);
  // console.log(data);
  // console.log(Products)
  return (
    <>
      <div className='container'>
        <h2>Products</h2>
        <div className='products'>
          {products.map((product) => (
            <div className='product' key={product.id}>
              <div className='product_image'>
                <img src={product.image} alt='Not Found' />
              </div>
              <div className='product_details'>
                <div className='product_name'>
                  {product.name}
                </div>
                <div className='product_price'>
                  ${product.price}.00
                </div>
              </div>
              <Link to='' onClick={() => dispatch({ type: "ADD_TO_CART", id: product.id, product: product })}>
                <div className='add_cart'>
                  Add to Cart
                </div>
              </Link>
              {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
              {product.status === 'new' ? <div className='new'>new</div> : ''}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
