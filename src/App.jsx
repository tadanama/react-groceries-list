import AddForm from "./AddForm";
import Footer from "./Footer";
import GroceriesList from "./GroceriesList";
import Header from "./Header";

function App() {
	return (
		<>
			<div className="app">
				<Header />
				<AddForm />
				<GroceriesList />
				<Footer />
			</div>
		</>
	);
}

export default App;
