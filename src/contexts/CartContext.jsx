import React, { createContext, useContext } from "react";

const cartContext = createContext();

export function useCartContext() {
	return useContext(cartContext);
}

function CartContext() {
	return <div>CartContext</div>;
}

export default CartContext;
