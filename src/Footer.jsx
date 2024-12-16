import React from "react";

function Footer() {
	const date = new Date();
	return (
		<footer>
			<p>Syakir Haziq @ {date.getFullYear()}</p>
		</footer>
	);
}

export default Footer;
