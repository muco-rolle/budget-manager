import React from "react";
import EntryCounter from "./EntryCounter";

const EntriesCounter = ({ budget }) => {
	return (
		<div className="entries-counter">
			<EntryCounter type="income" totalIncome={budget.incomes.length} />
			<EntryCounter type="expense" totalExpense={budget.expenses.length} />
		</div>
	);
};

export default EntriesCounter;
