import React from "react";
import PropTypes from "prop-types";

//- show prop comes from counters button to show items
const Button = ({ classes, type, children, url, show }) => {
	classes =
		"btn " +
		classes
			.split(" ")
			.map(className => {
				return `btn--${className}`;
			})
			.join(" ");

	if (type === "anchor-tag") {
		return (
			<a href={url || "/link"} className={classes} onClick={show}>
				{children}
			</a>
		);
	}

	if (!type) {
		return <button className={classes}>{children}</button>;
	}
};

Button.propTypes = {
	classes: PropTypes.string.isRequired
};

export default Button;
