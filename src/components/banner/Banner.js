import React from "react";
import AvailableAmount from "./AvailableAmount";
import Entries from "./entries/Entries";
import styles from "./styles";

const Banner = ({ budget }) => {
	let totalIncomeAmount = 0;
	let totalExpenseAmount = 0;
	let totalAmount = 0;

	budget.incomes.forEach(income => (totalIncomeAmount += income.money));
	budget.expenses.forEach(expense => (totalExpenseAmount += expense.money));

	totalAmount = totalIncomeAmount - totalExpenseAmount;

	return (
		<section className="banner-section" style={styles}>
			<AvailableAmount totalAmount={totalAmount} />
			<Entries totalIncomeAmount={totalIncomeAmount} totalExpenseAmount={totalExpenseAmount} />
		</section>
	);
};

export default Banner;
