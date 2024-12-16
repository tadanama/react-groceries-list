import AddForm from "./AddForm";
import Footer from "./Footer";
import GroceriesList from "./GroceriesList";
import Header from "./Header";
import { useState } from "react";

function App() {
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
		<>
			<div className="app">
				<Header />
				<AddForm />
				<GroceriesList groceries={groceries} setGroceries={setGroceries} />
				<Footer />
			</div>
		</>
	);
}

export default App;
