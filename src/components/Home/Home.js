import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirt, setTShirt] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        // console.log(selectedItem);
        const exists = cart.find(product => product._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert('Hey you are already added this items')
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        // console.log(selectedItem);
        const rest = cart.filter(product => product._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className='tShirt-container'>
                {
                    tShirt.map(product => <TShirt handleAddToCart={handleAddToCart} key={product._id} product={product}></TShirt>)
                }
            </div>
            <div className='cart'>
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;