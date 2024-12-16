import React, { useState } from "react";

import GroceryItem from "./GroceryItem";

function GroceriesList({ groceries, setGroceries, search }) {
	function handleCheck(id) {
		console.log("Checking for item", id);

		const list = groceries.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setGroceries(list);
	}

	function handleDelete(id) {
		const list = groceries.filter((item) => item.id !== id);
		setGroceries(list);
	}

	return (
		<main>
			{groceries.length ? (
				groceries.map((grocerie) => {
					return (
						<GroceryItem
							grocerie={grocerie}
							key={grocerie.id}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					);
				})
			) : (
				search ? <p>No item matched</p> : <p>You have no items</p>
			)}
		</main>
	);
}

export default GroceriesList;
