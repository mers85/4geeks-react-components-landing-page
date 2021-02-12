import React from "react";
import Proptypes from "prop-types";

//include images into your bundle

//create your first component
export function SingleCard(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text text-justify">{props.description}</p>
			</div>
			<ul className="list-group list-group-flush d-flex align-items-center">
				<li className="list-group-item ">
					<a
						href={props.urlButton}
						rel="noreferrer"
						target="_blank"
						className="btn btn-info">
						{props.labelButton}
					</a>
				</li>
			</ul>
		</div>
	);
}

SingleCard.propTypes = {
	title: Proptypes.string,
	image: Proptypes.string,
	description: Proptypes.string,
	urlButton: Proptypes.string,
	labelButton: Proptypes.string
};
