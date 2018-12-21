import React, { Component } from "react";
//= imported styles
import "../../static/sass/app.scss";
import "typeface-pacifico";

//= imported components
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Form from '../../components/form/Form';

class App extends Component {

	submitHandler = (event) => {
		event.preventDefault();
		//- save data in the localStorage
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Banner />
				<Form submitHandler={this.submitHandler} />
			</React.Fragment>
		);
	}
}

export default App;
