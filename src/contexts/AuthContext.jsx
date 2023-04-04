import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/consts";
import { useContext } from "react";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { notifyError } from "../components/Toastify";

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
			notifyError(error.code);
		}
	}

	async function login({ email, password }) {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			console.log(res);
		} catch (error) {
			notifyError(error.code);
		}
	}

	

	const value = {
		user: state.user,
		register,
		login,
	};
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
