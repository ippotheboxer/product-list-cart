import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
    return (
        <div className="cart">
          <h2 className='cartTitle text-2xl font-bold self-start pb-4'>Your cart ({cartItems.length})</h2>
          <div className="flex flex-col gap-4 w-full">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center cartItem with-line pb-3" key={item.id}>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold pb-1">{item.name}</h1>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-bold cartTitle">{item.quantity}x</p>
              <p className="font-light categoryName">@{item.price}</p>
              <p>${item.price * item.quantity}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2"
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <button
            className="px-4 py-2"
            onClick={() => {
              removeFromCart(item)
            }}
          >
            -
          </button>
        </div>
      </div>
    ))}
  </div>
          {
          cartItems.length > 0 ? ( 
            <div className="flex flex-col justify-between items-center self-start w-full">
              <div className="flex flex-row justify-between items-center w-full pb-4 p-2">
            <h1 className="text-sm">Order Total</h1>
            <h2 className="text-xl font-bold">${getCartTotal()}</h2>
            </div>
            <div className="flex flex-row carbonNeutral py-3 px-6 rounded-md">
              <img src={iconCarbonNeutral} />
              <p className="text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery </p>
            </div>
            <button
              className="px-4 py-2"
              onClick={() => {
                clearCart()
              }}
            >
              Clear cart
            </button>
          </div>
          ) : ( 
            <>
            <img src={emptyCartIcon} alt="" className="w-20"/>
          <p className="emptyCartText">Your added items will display here</p>
          </>
          )
          }
        </div>
    );
}