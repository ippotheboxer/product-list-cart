import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import iconOrderConfirmed from '../assets/images/icon-order-confirmed.svg';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

export default function OrderPopUp(props) {
  const {clearCart} = useContext(CartContext);
  return (
  <Popup trigger=
  {<button className="orderButton mb-3">Confirm Order</button>}
  modal nested> 
  {
    close => (
    <div className='modal p-4 rounded-3xl'>
        <img src={iconOrderConfirmed} className='pb-2'/>
        <h1 className='font-bold text-3xl pb-1'>Order Confirmed</h1>
        <p className='text-xs categoryName pb-4'>We hope you enjoy your food!</p>

        <div className='bg-cream-background rounded-xl'>
        {props.items.map((item) => (
          <div className="flex justify-between items-center with-line pb-3 p-4" key={item.id}>
            <div className='flex'>
              <img src={item.image.thumbnail} className='rounded-lg w-14 mr-4' />
              <div className='flex flex-col'> 
                <h1 className="text-sm font-semibold pb-1">{item.name}</h1>
                <div className="flex flex-row justify-start">
                  <p className="text-sm font-bold cartTitle pr-4">{item.quantity}x</p>
                  <p className="font-light categoryName">@{item.price}</p>
                 </div>
                </div>
                </div>
                <p className='font-semibold self-end'>${item.price * item.quantity}</p>
          </div>
         ))}
         <div className="flex flex-row justify-between items-center w-full pb-4 p-4">
            <h1 className="text-sm">Order Total</h1>
            <h2 className="text-lg font-bold">${props.orderTotal}</h2>
          </div>
          </div>
          
    
    <div className='p-4 pt-8'>
      <button  className='self-center orderButton' onClick={() => {close(); clearCart();}}>
        Start New Order
      </button>
    </div>
    </div>
  )}
  </Popup>
  );
}
