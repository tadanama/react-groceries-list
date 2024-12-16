import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddForm() {
	return (
		<section>
			<form className="add-form">
				<input type="text" placeholder="Groceries to buy" />
                <button><FontAwesomeIcon icon={faPlus}/></button>
			</form>
		</section>
	);
}

export default AddForm;
