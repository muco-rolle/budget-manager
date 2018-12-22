import React from "react";

const AvailableAmount = ({ totalAmount }) => {
	return (
		<div className="available-amount">
			<p className="paragraph">
				Available Amount in <span className="month">September</span>:
			</p>
			<p className="amount">{totalAmount}</p>
		</div>
	);
};

export default AvailableAmount;
