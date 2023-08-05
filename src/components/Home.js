import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='shadow'/>
        </div>
        <div className='home__row'>
            <Product/>
        </div>
    </div>
  )
}

export default Home
