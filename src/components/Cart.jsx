import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";

export const Cart = () => {
    return (
        <div className="cart">
          <h2 className='cartTitle text-2xl font-bold self-start'>Your cart</h2>
          <img src={emptyCartIcon} />
          <p className="emptyCartText">Your added items will display here</p>
        </div>
    );
}