import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function GroceryItem({ grocerie, handleCheck, handleDelete }) {
	return (
		<article className="list-item">
			<input
				type="checkbox"
				checked={grocerie.checked}
				onChange={() => handleCheck(grocerie.id)}
			/>
			<label
				style={{ textDecoration: grocerie.checked ? "line-through" : null }}
			>
				{grocerie.text}
			</label>

			<FontAwesomeIcon
				icon={faTrash}
				onClick={() => handleDelete(grocerie.id)}
			/>
		</article>
	);
}

export default GroceryItem;
