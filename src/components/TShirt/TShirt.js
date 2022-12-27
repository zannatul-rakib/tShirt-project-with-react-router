import React from 'react';
import './TShirt.css';

const TShirt = ({ handleAddToCart , product}) => {
    const { name, picture, price } = product;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;