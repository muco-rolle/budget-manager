import React from "react";
import EntryCounter from "./EntryCounter";

const EntriesCounter = props => {
	return (
		<div className="entries-counter">
			<EntryCounter type="income" totalValue={props.budget.incomes.length} show={props.showIncomeItems} />
			<EntryCounter type="expense" totalValue={props.budget.expenses.length} show={props.showExpenseItems} />
		</div>
	);
};

export default EntriesCounter;
