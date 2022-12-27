import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering has mainly 4 options
    // 01. Element variable
    // 02. ternary operator (condition ? true : false)
    // 03. && and operator (shorthand operator)
    // 04. || or operator
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item!</p>
    } else if (cart.length === 1) {
        command = <p>Please add more...</p>
    } else {
        command = <p>Thanks for adding item!</p>
    }
    return (
        <div>
            <h3>Order Items: {cart.length}</h3>
            {command}
            {cart.length === 0 || <h5 className='golden'>You are now buying</h5>}
            {cart.length === 5 && <div className='golden'>
                <h5>You are selected 5 items!</h5>
            </div>}
            {
                cart.map(product => <p>{product.name} <button onClick={() => handleRemoveFromCart(product)}>X</button></p>)
            }
            {cart.length !==5 ? <p>keep adding</p> : <button>Remove all</button>}
        </div>
    );
};

export default Cart;