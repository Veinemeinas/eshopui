import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import PaginatedItems from "./PaginatedItems";

function Products() {
	const navigate = useNavigate();

	const add = () => {
		let path = "AddProduct";
		navigate(path);
	};

	return (
		<div>
			<h1>Prekių sąrašas</h1>
			<div className="addButton">
				<button onClick={add}>Pridėti prekę</button>
			</div>
			<div className="Products">
				<div className="title">
					<div>Prekė</div>
					<div>Gamintojas</div>
					<div>Modelis</div>
					<div>Kiekis (vnt.)</div>
					<div>Kaina (€)</div>
				</div>
			</div>
			<PaginatedItems itemsPerPage={8} />
		</div>
	);
}

export default Products;
