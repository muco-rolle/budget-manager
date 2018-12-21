import React from "react";
import Button from "../ui/Button";

//- Navigation Component
const Nav = () => (
	<nav className="nav">
		<ul className="nav__list">
			<li className="nav__item">
				<Button classes="outline outline--green" type="anchor-tag" url="/login">
					Login
				</Button>
			</li>
			<li className="nav__item">
				{/* <a href="/signup" className="nav__link btn btn--green">
					Sign up
				</a> */}
				<Button classes="green" type="anchor-tag">Sign up</Button>
			</li>
		</ul>
	</nav>
);

export default Nav;
