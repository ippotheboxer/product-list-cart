import React from 'react'
import addToCart from "../assets/images/icon-add-to-cart.svg"

export const Product = (props) => {
  return (
    <div className='product grid'>
      <div className='relative grid'>
          <img src={props.imgSRC} className='image' />
          <button className='cartButton'><img src={addToCart}/> Add to cart</button>
        </div>
        <p className='categoryName pt-2'>{props.category}</p>
        <p className='font-medium'>{props.name}</p>
        <p className='price'>${props.price}</p>
    </div>
  )
}
