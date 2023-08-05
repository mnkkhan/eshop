import { Rating } from '@mui/material'
import React from 'react'

function Product() {
  return (
    <div className='product'>
      <div className="product__info">
        <p>The lean startup</p>
        <p className='product__price'>
            <small>₹</small>
            <strong>499</strong>
        </p>
        <div className="product__rating">
            <p><Rating/></p>
        </div>
        <img src='https://coolerinsights.com/wp-content/uploads/2013/04/The-Lean-Startup.jpeg' alt='book' height={150}/>
        <button className='button'>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product
