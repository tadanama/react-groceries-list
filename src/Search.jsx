import React from "react";

function Search({ search, setSearch }) {
	return (
		<form className="search-form">
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
}

export default Search;
