import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/products/AddProduct";
import ProductDetail from "./components/products/ProductDetail";
import Products from "./components/products/Products";

export default function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Products />} />
			<Route exact path="/product" element={<Products />} />
			<Route exact path="/product/:id" element={<ProductDetail />} />
			<Route exact path="/addProduct" element={<AddProduct />} />
			<Route exact path="*" element="404" />
		</Routes>
	);
}
