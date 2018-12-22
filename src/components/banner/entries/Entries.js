import React from "react";
import Entry from "./Entry";

const Entries = props => {
	return (
		<div className="entries">
			<Entry type="income" amount={props.totalIncomeAmount} />
			<Entry type="expense" amount={props.totalExpenseAmount} />
		</div>
	);
};

export default Entries;
