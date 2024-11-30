import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";
import { useContext } from 'react';
import { CartContext } from '../context/Cart'
import PropTypes from 'prop-types'

export default function Cart({showModal, toggle}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    return (
        <div className="cart">
          <h2 className='cartTitle text-2xl font-bold self-start'>Your cart ({cartItems.length})</h2>
          <div className="flex flex-col gap-4">
    {cartItems.map((item) => (
      <div className="flex justify-between items-center" key={item.id}>
        <div className="flex gap-4">
          <img src={item.image.thumbnail} alt={item.name} className="rounded-md h-24" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="">{item.price}</p>
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
          <p>{item.quantity}</p>
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
            <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
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
            <img src={emptyCartIcon} alt="" />
          <p className="emptyCartText">Your added items will display here</p>
          </>
          )
          }
        </div>
    );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}