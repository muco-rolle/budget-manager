import React from "react";
import Item from "./Item";

const Items = props => {
	//- get incomes items
	const incomeItems = () => {
		return props.budget.incomes.map(income => {
			return (
				<Item
					key={income.id}
					id={income.id}
					type={income.type}
					money={income.money}
					description={income.description}
					removeItem={props.removeItem}
					showEditFormHandler={props.showEditFormHandler}
				/>
			);
		});
	};

	//- get expenses items
	const ExpenseItems = () => {
		return props.budget.expenses.map((income, index) => {
			return (
				<Item
					key={index}
					id={income.id}
					type={income.type}
					money={income.money}
					description={income.description}
					removeItem={props.removeItem}
					showEditFormHandler={props.showEditFormHandler}
				/>
			);
		});
	};

	return (
		<div className="items">
			<div className="container">
				{props.showIncomeItems ? incomeItems() : null}
				{props.showExpenseItems ? ExpenseItems() : null}
			</div>
		</div>
	);
};

export default Items;
