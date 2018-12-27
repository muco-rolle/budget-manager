import React, { Component } from "react";
import { storage } from "../../helpers";

//= imported styles
import "../../static/sass/app.scss";
import "typeface-pacifico";

//= imported components
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import AddForm from "../../components/form/AddForm";
import EntriesCounter from "../../components/entries-counter/EntriesCounter";
import Items from "../../components/items/Items";

class App extends Component {
	state = {
		budget: {
			incomes: [],
			expenses: [],
			totalAmount: 0
		},
		showIncomeItems: false,
		showExpenseItems: false,
		showEditForm: false
	};

	componentDidMount = () => {
		let budget = { ...this.state.budget };

		budget = storage.get("budget");

		if (!budget) {
			budget = { ...this.state.budget };
		}
		this.setState(prevState => ({ budget }));
	};

	saveDataToLocal = data => {
		let budget = { ...this.state.budget };

		//- initialize the storage
		if (data.type === "income") {
			budget.incomes.push(data);
		} else if (data.type === "expense") {
			budget.expenses.push(data);
		}

		//- change the state
		this.setState(prevState => ({ budget }));

		//- store the state in localstorage
		storage.set("budget", budget);
	};

	showIncomeItems = event => {
		event.preventDefault();
		let show = this.state.showIncomeItems;
		this.setState({ showIncomeItems: !show, showExpenseItems: false });
	};

	showExpenseItems = event => {
		event.preventDefault();
		let show = this.state.showExpenseItems;
		this.setState({ showIncomeItems: false, showExpenseItems: !show });
	};

	removeItem = (event, type, id) => {
		event.preventDefault();
		let budget = { ...this.state.budget };

		if (type === "income") {
			let items = budget.incomes.filter(income => income.id !== id);
			budget = storage.get("budget");
			budget.incomes = items;
		} else if (type === "expense") {
			let items = budget.expenses.filter(expense => expense.id !== id);
			budget = storage.get("budget");
			budget.expenses = items;
		}

		//- change the state
		this.setState(prevState => ({ budget }));

		//- store the state in localstorage

		storage.set("budget", budget);
	};

	showEditFormHandler = event => {
		event.preventDefault();
		this.setState({ showEditForm: true });
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				<Banner budget={this.state.budget} />
				<AddForm saveDataToLocal={this.saveDataToLocal} />
				<EntriesCounter
					budget={this.state.budget}
					showIncomeItems={this.showIncomeItems}
					showExpenseItems={this.showExpenseItems}
				/>
				<Items
					budget={this.state.budget}
					showIncomeItems={this.state.showIncomeItems}
					showExpenseItems={this.state.showExpenseItems}
					removeItem={this.removeItem}
					showEditFormHandler={this.showEditFormHandler}
				/>
			</React.Fragment>
		);
	}
}

export default App;
