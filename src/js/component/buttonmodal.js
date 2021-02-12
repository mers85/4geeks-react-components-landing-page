import React from "react";
import { useState } from "react";
//include images into your bundle

export function ButtonModal() {
	const [show, setShow] = useState(false);
	const [bodyDescription, setbodyDescription] = useState(
		"Vi estas en React Animal's Webpage"
	);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const changeDescription = () => setbodyDescription("Gis la revido amiko");

	return (
		<div>
			<a
				variant="primary"
				onClick={handleShow}
				type="button"
				className="btn btn-info btn-lg"
				data-toggle="modal"
				data-target="#exampleModal">
				Call me!
			</a>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				show={show}
				onHide={handleClose}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Saluton Karulo aux Karulino!!
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body text-muted">
							{bodyDescription}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								variant="secondary"
								onClick={handleClose}>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								variant="primary"
								onClick={changeDescription}>
								Change body description
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
