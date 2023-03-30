import React, { createContext, useContext } from "react";

const cartContext = createContext();

export function useCartContext() {
	return useContext(cartContext);
}

function CartContext({ children }) {
	const value = {};
	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
export default CartContext;
