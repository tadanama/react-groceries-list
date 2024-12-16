import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function GroceryItem({ grocerie }) {
	return (
		<article className="list-item" >
			<input type="checkbox" checked={grocerie.checked}/>
			<label> {grocerie.text}</label>
			<FontAwesomeIcon icon={faTrash} />
		</article>
	);
}

export default GroceryItem;
