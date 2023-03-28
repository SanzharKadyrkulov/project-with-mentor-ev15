import { TextField } from "@mui/material";
import React from "react";

function AddProductPage() {
	return <div>
		<form>
		<TextField name="title" label="Title" variant="outlined" />
		</form>
	</div>;
}

export default AddProductPage;
