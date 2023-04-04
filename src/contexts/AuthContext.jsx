import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/consts";
import { useContext } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

	async function register({ email, password }) {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}

	const value = {
		user: state.user,
		register,
	};
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
