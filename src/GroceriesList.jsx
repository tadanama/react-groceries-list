import React, { useState } from "react";

import GroceryItem from "./GroceryItem";

function GroceriesList() {
	const [groceries, setGroceries] = useState([
		{
			id: 1,
			checked: false,
			text: "Eggs",
		},
		{
			id: 2,
			checked: false,
			text: "Chicken",
		},
		{
			id: 3,
			checked: false,
			text: "Oats",
		},
	]);

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
				<p>You have no items</p>
			)}
		</main>
	);
}

export default GroceriesList;
