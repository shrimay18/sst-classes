// import { createContext } from "react";

// const CartContext = createContext({
//     cart: {},
//     increaseQuantity: () => {},
//     decreaseQuantity: () => {}
// });

// export default CartContext;

import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const increaseQuantity = (product) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[product.id]) {
                newCart[product.id].quantity += 1;
            } else {
                newCart[product.id] = { ...product, quantity: 1 };
            }
            return newCart;
        });
    };

    const decreaseQuantity = (product) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[product.id]) {
                newCart[product.id].quantity -= 1;
                if (newCart[product.id].quantity === 0) {
                    delete newCart[product.id];
                }
            }
            return newCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
