import Reac, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddForm({ groceries, addNewGrocery }) {
	const [newGrocery, setNewGrocery] = useState("");

	return (
		<section>
			<form className="add-form">
				<input
					type="text"
					placeholder="Groceries to buy"
					value={newGrocery}
					onChange={(e) => setNewGrocery(e.target.value)}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();

						if (!newGrocery) return;

						const newItem = {
							id: groceries.length + 1,
							checked: false,
							text: newGrocery,
						};
						setNewGrocery("");
						addNewGrocery(newItem);
					}}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</form>
		</section>
	);
}

export default AddForm;
