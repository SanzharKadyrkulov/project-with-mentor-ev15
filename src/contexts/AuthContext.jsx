import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/consts";
import { useContext } from "react";

const authContext = createContext();

export function useAuthContext() {
	return useContext(authContext);
}

const initState = {
	user: null,
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.user:
			return { ...state, user: action.payload };

		default:
			return state;
	}
}

function AuthContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initState);


	

	const value = {
		user: state.user,
	};
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
