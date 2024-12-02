import React from 'react';
import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
import OrderPopUp from "./OrderPopUp";

export default function Cart() {
  const { cartItems, getCartTotal } = useContext(CartContext);
    return (
        <div className="cart">
          <h2 className='cartTitle text-2xl font-bold self-start pb-4'>Your cart ({cartItems.length})</h2>
          <div className="flex flex-col gap-4 w-full">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center cartItem with-line pb-3" key={item.id}>
          <div className="flex flex-col">
            <h1 className="text-md font-semibold pb-1">{item.name}</h1>
            <div className="flex flex-row justify-start">
              <p className="text-sm font-bold cartTitle pr-4">{item.quantity}x</p>
              <p className="font-light categoryName text-sm pr-4">@{(Number(item.price)).toFixed(2)}</p>
              <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
      </div>
    ))}
  </div>
          {
          cartItems.length > 0 ? ( 
            <div className="flex flex-col justify-between items-center self-start w-full">
              <div className="flex flex-row justify-between items-center w-full pb-4 p-2">
            <h1 className="text-sm">Order Total</h1>
            <h2 className="text-xl font-bold">${(getCartTotal()).toFixed(2)}</h2>
            </div>
            <div className="flex flex-row carbonNeutral py-3 px-6 rounded-md mb-4">
              <img src={iconCarbonNeutral} />
              <p className="text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery </p>
            </div>
            <OrderPopUp items={cartItems} orderTotal={(getCartTotal()).toFixed(2)}/>
          </div>
          ) : ( 
            <div className="flex justify-center items-center flex-col mx-4">
            <img src={emptyCartIcon} alt="" className="w-28 p-1"/>
          <p className="emptyCartText">Your added items will display here</p>
          </div>
          )
          }
        </div>
    );
}