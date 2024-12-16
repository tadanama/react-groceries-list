import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function GroceriesList() {
	return (
		<main>
			<div className="list-item">
				<input type="checkbox" />
				<label> Item number 1</label>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</main>
	);
}

export default GroceriesList;
