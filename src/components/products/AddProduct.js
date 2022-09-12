import "./Products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
	const navigate = useNavigate();

	let AddItem = (e) => {
		e.preventDefault();
		const inputData = new FormData(e.target);

		let obj = {
			name: inputData.get("Name"),
			brand: inputData.get("Brand"),
			model: inputData.get("Model"),
			description: inputData.get("Description"),
			quantity: inputData.get("Quantity"),
			price: inputData.get("Price"),
		};

		axios.post("https://localhost:7246/api/product", obj).then((response) => {
			console.log(response.data);
			navigate("/");
		});
	};

	return (
		<div>
			<h1>Pridėti prekę</h1>
			<ul>
				<form onSubmit={AddItem}>
					<li>
						<label htmlFor="product">Prekė</label>
						<input type="text" name="Name" id="product" />
					</li>
					<li>
						<label htmlFor="brand">Gamintojas</label>
						<input type="text" name="Brand" id="brand" />
					</li>
					<li>
						<label htmlFor="model">Modelis</label>
						<input type="text" name="Model" id="model" />
					</li>
					<li>
						<label htmlFor="description">Aprašymas</label>
						<textarea id="description" name="Description" />
					</li>
					<li>
						<label htmlFor="quantity">Kiekis</label>
						<input type="string" name="Quantity" id="quantity" />
					</li>
					<li>
						<label htmlFor="price">Kaina</label>
						<input type="string" name="Price" id="price" />
					</li>
					<li className="right">
						<input type="submit" name="Pridėti" />
					</li>
				</form>
			</ul>
		</div>
	);
}

export default AddProduct;
