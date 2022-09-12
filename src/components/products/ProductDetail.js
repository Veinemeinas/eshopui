import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./Products.css";

function ProductDetail() {
	const { id } = useParams();
	const { data, loading, error } = useFetch(`https://localhost:7246/api/Product/${id}`);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return console.log(error);
	}

	return (
		<div>
			<h1>Prekė</h1>
			<div className="container">
				<div className="item">Pavadinimas</div>
				<div>{data?.name}</div>
				<div className="item">Gamintojas</div>
				<div>{data?.brand}</div>
				<div className="item">Modelis</div>
				<div>{data?.model}</div>
				<div className="item">Aprašymas</div>
				<div>{data?.description}</div>
				<div className="item">Kiekis (vnt.)</div>
				<div>{data?.quantity}</div>
				<div className="item">Kaina (€)</div>
				<div>{data?.price}</div>
			</div>
		</div>
	);
}

export default ProductDetail;
