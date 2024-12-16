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

	return (
		<main>

			{groceries.length ? (
				groceries.map((grocerie) => {
					return <GroceryItem grocerie={grocerie} key={grocerie.id} />;
				})
			) : (
				<p>You have no items</p>
			)}
		</main>
	);
}

export default GroceriesList;
