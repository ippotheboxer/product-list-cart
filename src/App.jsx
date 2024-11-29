import React from 'react'
import { Product } from './components/product';
import { Cart } from './components/Cart';
import {products} from "./data"

const App = () => {
  return (
    <main className='main justify-center lg:justify-start p-4'>
      <section className="flex justify-start content-center lg:content-start flex-col lg:flex-row self-start">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:w-7/12 w-full gap-6 pr-8">
          <h1 className='text-2xl font-bold lg:col-span-3 sm:col-span-1'>Desserts</h1>
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
        <Cart />
      </section>  
      </main>
  );
}

export default App;
