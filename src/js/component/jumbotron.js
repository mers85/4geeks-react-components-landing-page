import React from "react";
import { ButtonModal } from "./buttonmodal.js";

//include images into your bundle

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<p className="lead">
				<ButtonModal />
			</p>
		</div>
	);
}
