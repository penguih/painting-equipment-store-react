import React from 'react';
import StoreContext from './useContext';

export const useCart = () => {
    const { addCart } = React.useContext(StoreContext);
    const cartCost = addCart.reduce((sum, item) => item.cost + sum, 0);

    return { addCart, cartCost };
};