import React, { Component } from "react";
// import Field from './Field';

class Form extends Component {
	type = React.createRef();
	description = React.createRef();
	money = React.createRef();

	submitHandler = event => {
		//-prevent the form from submitting;
		event.preventDefault();
		//= inputedvalues
		const id = Date.now();
		const type = this.type.current.value;
		const description = this.description.current.value;
		const money = +this.money.current.value;

		//- clear out fields
		this.description.current.value = "";
		this.money.current.value = "";

		//- one of them is empty? stop running the function

		if (type && description && money) {
			this.props.saveDataToLocal({ id, type, description, money });
		} else {
			return;
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.submitHandler}>
				<div className="form__group">
					<select className="select-field" ref={this.type}>
						<option value="income">+</option>
						<option value="expense">-</option>
					</select>
				</div>

				<div className="form__group">
					<input
						type="text"
						placeholder="add description"
						className="input-field input-field--description"
						ref={this.description}
					/>
				</div>

				<div className="form__group">
					<input
						type="number"
						placeholder="add value"
						className="input-field input-field--money"
						ref={this.money}
					/>
				</div>

				<div className="form__group">
					<button type="submit" className="form__button">
						<i className="fa fa-check" />
					</button>
				</div>
			</form>
		);
	}
}

export default Form;
