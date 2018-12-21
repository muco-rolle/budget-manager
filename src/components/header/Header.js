import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

//- Header component
const Header = () => (
	<header className="header">
		<div className="container">
			<Logo />
			<Nav />
		</div>
	</header>
);

export default Header;
