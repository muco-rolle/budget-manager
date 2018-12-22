import React, { Component } from "react";
import { storage } from "../../helpers";

//= imported styles
import "../../static/sass/app.scss";
import "typeface-pacifico";

//= imported components
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Form from "../../components/form/Form";
import EntriesCounter from "../../components/entries-counter/EntriesCounter";

class App extends Component {
	state = {
		incomes: [],
		expenses: [],
		totalAmount: 0
	};

	componentDidMount = () => {
		let budget = { ...this.state };
		budget = storage.get("budget");
		this.setState(prevState => budget);
	};

	saveDataToLocal = data => {
		//- initialize the storage
		let budget = { ...this.state };

		if (data.type === "income") {
			budget.incomes.push(data);
		} else if (data.type === "expense") {
			budget.expenses.push(data);
		}

		this.setState(prevState => budget);

		storage.set("budget", budget);
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				<Banner budget={this.state} />
				<Form saveDataToLocal={this.saveDataToLocal} />
				<EntriesCounter budget={this.state} />
			</React.Fragment>
		);
	}
}

export default App;
