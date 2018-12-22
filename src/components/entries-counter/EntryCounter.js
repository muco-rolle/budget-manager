import React from "react";
import { ucFirst } from "../../helpers";
import Button from "../ui/Button";

const EntryCounter = ({ type, totalIncome, totalExpense }) => {
	let entryCounter = null;

	if (type === "income") {
		entryCounter = (
			<Button type="anchor-tag" classes="btn">
				<span>{`${ucFirst(type)}`}</span>
				<span className="income">{`(${totalIncome})`}</span>
			</Button>
		);
	} else if (type === "expense") {
		entryCounter = (
			<Button type="anchor-tag" classes="btn">
				<span>{`${ucFirst(type)}`}</span>
				<span className="expense">{`(${totalExpense})`}</span>
			</Button>
		);
	}

	return entryCounter;
};

export default EntryCounter;
