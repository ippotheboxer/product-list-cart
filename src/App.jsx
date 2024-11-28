import React from 'react'
import { Product } from './components/product';
import {products} from "./data"

const App = () => {
  return (
    <main className='main'>
      <section className="flex justify-start items-start w-full flex-row">
        
        <div className="grid grid-cols-3">
          <h1 className='text-2xl font-bold col-span-3'>Desserts</h1>
          {products.map(product => (
            <Product
          key={product.id}
          id={product.id} 
          imgSRC={product.image.desktop}
          category={product.category}
          name={product.name}
          price={product.price}
          />))}
        </div>
        <div className="cart">
          <h2>Your cart</h2>
        </div>
      </section>  
      </main>
  );
}

export default App;
