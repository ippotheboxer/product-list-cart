import React from 'react'
import addToCart from "../assets/images/icon-add-to-cart.svg"

export const Product = (props) => {
  return (
    <div className='flex flex-col p-6'>
        <img src={props.imgSRC} className='image' />
        <button className='cartButton flex'><img src={addToCart}/>Add to cart</button>
        <p className='categoryName pt-2'>{props.category}</p>
        <p>{props.name}</p>
        <p className='price'>${props.price}</p>
    </div>
  )
}
