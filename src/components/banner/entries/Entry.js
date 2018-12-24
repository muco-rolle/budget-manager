import React from "react";
import { ucFirst } from "../../../helpers";
import PropTypes from "prop-types";

const Entry = ({ type, amount }) => (
	<div className={"entry entry--" + type}>
		<p className="entry__text"> {ucFirst(type)}</p>
		<p className="entry__amount">{amount}</p>
	</div>
);

Entry.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired
};

export default Entry;
