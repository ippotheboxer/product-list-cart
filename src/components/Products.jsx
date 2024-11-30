import { useContext, useEffect, useState } from 'react';
import { products } from '../data';
import { CartContext } from '../context/Cart';
import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import Cart from './Cart'

export default function Products() {
    const { cartItems, addToCart } = useContext(CartContext);

    return ( 
        <section className="flex justify-start content-center lg:content-start flex-col lg:flex-row self-start"> 
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:w-7/12 xl:w-6/12 w-full gap-6 pr-8 mr-8">
          <h1 className='text-2xl font-bold lg:col-span-3 sm:col-span-1'>Desserts</h1>
        {
        products.map(product => (
        <div className='product grid' key={product.id} id={product.id}>
            <div className='relative grid'>
                <img src={product.image.desktop} className='image' />
                <button onClick={() => addToCart(product)} className='cartButton'><img src={addToCartIcon}/> Add to cart</button>
                </div>
                <p className='categoryName pt-2 text-xs'>{product.category}</p>
                <p className='font-medium'>{product.name}</p>
                <p className='price'>${product.price}</p>
                </div>
                ))}
                </div>
                <Cart />
            </section>  
            );
        }