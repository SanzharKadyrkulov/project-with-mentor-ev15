import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductsList() {
	const { products, getProducts } = useProductContext();

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<Grid container spacing={2}>
				{products.map((item) => {
					return <ProductCard key={item.id} item={item} />;
				})}
			</Grid>
		</div>
	);
}

export default ProductsList;
