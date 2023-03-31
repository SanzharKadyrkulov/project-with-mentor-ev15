import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import Toastify from "./components/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ProductContext>
			<CartContext>
				<Toastify />
				<App />
			</CartContext>
		</ProductContext>
	</BrowserRouter>
);
