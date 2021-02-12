import React from "react";
//include images into your bundle

//create your first component
export function Footer() {
	return (
		<footer
			className="footer navbar navbar-expand-lg navbar-dark bg-dark py-3"
			role="contentinfo">
			<div className="col-12 text-center">
				<p className="text-muted">By Gazpacho</p>
			</div>
		</footer>
	);
}
