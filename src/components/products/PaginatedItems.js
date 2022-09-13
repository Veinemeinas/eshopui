import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../../useFetch";
import Product from "./Product";
import "./Products.css";
import { Link } from "react-router-dom";

// Example items, to simulate fetching from another resources.

export default function PaginatedItems({ itemsPerPage }) {
	const { data } = useFetch("https://localhost:7246/api/Product");

	// We start with an empty list of items.
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(data?.slice(itemOffset, endOffset));

		setPageCount(Math.ceil(data?.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data?.length;
		console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
		setItemOffset(newOffset);
	};

	return (
		<>
			<div className="Products" style={{ borderTop: 0 }}>
				{currentItems?.map((product) => (
					<Link to={`/product/${product.id}`} key={product.id}>
						<Product product={product} />
					</Link>
				))}
			</div>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
		</>
	);
}
