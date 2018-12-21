import React from "react";
import AvailableAmount from './AvailableAmount';
import Entries from './entries/Entries';
import styles from './styles';

const Banner = props => {
	return (
		<section className="banner-section" style={styles}>
			<AvailableAmount />
			<Entries />
		</section>
	);
};

export default Banner;
