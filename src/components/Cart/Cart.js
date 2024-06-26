// import React, { useContext } from 'react';
// import CartContext from '../../context/CartContext';

// const Cart = () => {
//     const { cart } = useContext(CartContext);

//     const cartItems = Object.values(cart);

//     return (
//         <div>
//             <h2>Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <ul>
//                     {cartItems.map(item => (
//                         <li key={item.id}>
//                             <span>{item.name} - Quantity: {item.quantity}</span>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Cart;

import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    const cartItems = Object.values(cart);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.title} - Quantity: {item.quantity}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
