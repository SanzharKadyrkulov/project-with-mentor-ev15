import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCartContext } from "../contexts/CartContext";

export default function CartPage() {
	const { cart } = useCartContext();

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell align="right">Image</TableCell>
						<TableCell align="right">Category</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Sub Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cart.products.map((item) => (
						<TableRow
							key={item.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{item.title}
							</TableCell>
							<TableCell align="right">
								<img width={30} src={item.image} alt="" />
							</TableCell>
							<TableCell align="right">{item.category}</TableCell>
							<TableCell align="right">{item.price}</TableCell>
							<TableCell align="right">{item.subPrice}</TableCell>
							<TableCell align="right">
								<button>+</button>
								<h6>{item.count}</h6>
								<button>-</button>
							</TableCell>

						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
