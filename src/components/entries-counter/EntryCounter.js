import React from "react";
import Button from "../ui/Button";

const EntryCounter = props => {
	return (
		<Button type="anchor-tag" classes="btn" show={props.show}>
			<span>{`show ${props.type}s`}</span>
			<span className={`${props.type}`}>{`(${props.totalValue})`}</span>
		</Button>
	);
};

export default EntryCounter;
