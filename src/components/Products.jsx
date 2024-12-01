import { useContext, useEffect, useState } from 'react';
import { products } from '../data';
import { CartContext } from '../context/Cart';
import Cart from './Cart'

// Icons
import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import incrementQuantity from "../assets/images/icon-increment-quantity.svg";
import decrementQuantity from "../assets/images/icon-decrement-quantity.svg";

export default function Products() {
    const {addToCart, removeFromCart, productInCart, speficicQuanitity} = useContext(CartContext);

    return ( 
        <section className="flex justify-start content-center lg:content-start flex-col lg:flex-row self-start"> 
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:w-7/12 xl:w-6/12 w-full gap-6 pr-8 mr-8">
          <h1 className='text-2xl font-bold lg:col-span-3 sm:col-span-1'>Desserts</h1>
        {
        products.map(product => (
        <div className='product grid' key={product.id} id={product.id}>
            <div className='relative grid'>
                <img src={product.image.desktop} 
                className={productInCart(product) ? "image redBorder" : "image"} />
                {
                productInCart(product) ? (
                    <div className='incrementProduct'>
                        <div className='flex flex-row justify-between'>
                            <button onClick={() => removeFromCart(product)} className='mr-9'>
                                <img src={decrementQuantity} className='rounded-full border py-2 px-1'/>
                            </button>
                            <p className='text-white'>{speficicQuanitity(product)}</p>
                            <button onClick={() => addToCart(product)} className='ml-9'>
                                <img src={incrementQuantity} className='rounded-full border p-1'/>
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => addToCart(product)} className='cartButton'><img src={addToCartIcon}/> Add to cart</button>
                )
                }
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