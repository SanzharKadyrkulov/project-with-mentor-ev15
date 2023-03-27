import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import { useProductContext } from "../contexts/ProductContext";

function ProductCard({ item }) {
	const { deleteProduct } = useProductContext();

	return (
		<Grid item md={4} sm={6} xs={12}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="300"
					image={item.image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						${item.price}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={() => deleteProduct(item.id)}
						color="error"
						size="small"
					>
						Delete
					</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default ProductCard;
