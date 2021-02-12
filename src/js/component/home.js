import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { CardGrid } from "./cardgrid.js";
import { Footer } from "./footer.js";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container-fluid py-5 mt-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<Jumbotron />
						<CardGrid />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
