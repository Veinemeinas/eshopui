import style from "./style.module.css";

function Product(props) {
	return (
		<div className={style.container}>
			<div>{props.product.name}</div>
			<div>{props.product.brand}</div>
			<div>{props.product.model}</div>
			<div>{props.product.quantity}</div>
			<div>{props.product.price}</div>
		</div>
	);
}

export default Product;
