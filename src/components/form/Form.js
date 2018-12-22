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
		const type = this.type.current.value;
		const description = this.description.current.value;
		const money = +this.money.current.value;
		//- clear out fields
		this.description.current.value = "";
		this.money.current.value = "";

		this.props.saveDataToLocal({ type, description, money });
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
