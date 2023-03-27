import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";

const productContext = createContext();

export function useProductContext() {
	return useContext(productContext);
}

const initState = {
	products: [],
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.products:
			return { ...state, products: action.payload };

		default:
			return state;
	}
}

function ProductContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initState);

	async function getProducts() {
		const { data } = await axios.get(API);
		dispatch({
			type: ACTIONS.products,
			payload: data,
		});
	}

	async function deleteProduct(id) {
		await axios.delete(`${API}/${id}`);
		getProducts();
	}

	const value = {
		products: state.products,
		getProducts,
		deleteProduct,
	};
	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
}

export default ProductContext;
