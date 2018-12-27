import React from "react";
import { month } from "../../helpers";

const AvailableAmount = ({ totalAmount }) => {
	return (
		<div className="available-amount">
			<p className="paragraph">
				Available Amount in <span className="month">{month.now()}</span>:
			</p>
			<p className="amount">{totalAmount}</p>
		</div>
	);
};

export default AvailableAmount;
