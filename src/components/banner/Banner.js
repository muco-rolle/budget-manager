import React from "react";
import { formatNumber } from "../../helpers";

import AvailableAmount from "./AvailableAmount";
import Entries from "./entries/Entries";
import styles from "./styles";

const Banner = ({ budget }) => {
	let totalIncomeAmount = 0;
	let totalExpenseAmount = 0;
	let totalAmount = 0;

	const { incomes, expenses } = budget;

	incomes.forEach(income => (totalIncomeAmount += income.money));
	expenses.forEach(expense => (totalExpenseAmount += expense.money));

	totalAmount = totalIncomeAmount - totalExpenseAmount;

	return (
		<section className="banner-section" style={styles}>
			<AvailableAmount totalAmount={formatNumber(totalAmount)} />
			<Entries
				totalIncomeAmount={formatNumber(totalIncomeAmount)}
				totalExpenseAmount={formatNumber(totalExpenseAmount)}
			/>
		</section>
	);
};

export default Banner;
