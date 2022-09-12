import React from "react";
import useFetch from "../../useFetch";
import Product from "./Product";
import "./Products.css";
import { Link, useNavigate } from "react-router-dom";

function Products() {
	const { data, loading, error } = useFetch("https://localhost:7246/api/Product");
	const navigate = useNavigate();

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return console.log(error);
	}

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

				{data?.map((product) => (
					<Link to={`/product/${product.id}`} key={product.id}>
						<Product product={product} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default Products;
