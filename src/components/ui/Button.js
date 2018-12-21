import React from "react";
import PropTypes from "prop-types";

const Button = ({ classes, type, children, url }) => {
	classes = "btn " + classes
		.split(" ")
		.map(className => {
			return `btn--${className}`;
		}).join(" ");

	if (type === "anchor-tag") {
		return (
			<a href={url || "/link"} className={classes}>
				{children}
			</a>
		);
	}

	if (!type) {
		return <button className={classes}>{children}</button>
	}
};

Button.propTypes = {
	classes: PropTypes.string.isRequired
};

export default Button;
