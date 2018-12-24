import React from "react";
import { ucFirst, formatNumber } from "../../helpers";

const Item = props => {
	return (
		<div className="item">
			<p className={`item__title item__title--${props.type}`}>{ucFirst(props.type)}</p>
			<p className="item__value">{formatNumber(props.money)}</p>
			<p className="item__description">{props.description}</p>

			<div className="item__buttons">
				<a href="/link" className="btn btn--delete" onClick={event => props.removeItem(event, props.type, props.id)}>
					<i className="fa fa-trash" />
				</a>
				<a href="/link" className="btn btn--edit">
					<i className="fa fa-edit" />
				</a>
			</div>
		</div>
	);
};

export default Item;
