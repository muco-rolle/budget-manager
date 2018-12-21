import React, { Component } from "react";
//= imported styles
import "../../static/sass/app.scss";
import "typeface-pacifico";

//= imported components
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Banner />
			</React.Fragment>
		);
	}
}

export default App;
