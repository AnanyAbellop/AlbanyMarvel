import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Characters = ({ people, rows }) => {
	const { store, actions } = useContext(Context);
	//console.log("people", people);
	//console.log("rows", rows);
	return people.map((people, index) => {
		let thumbnail = people.thumbnail.path + "." + people.thumbnail.extension;
		return (
			<div className="col-3 text-center mb-3" key={index}>
				<div className="card bg-dark text-white" style={{ width: "auto", height: "428px" }}>
					<img
						className="card-img"
						style={{ MaxWidth: "100%", height: "100%" }}
						src={thumbnail}
						alt="Card image"
					/>

					<div className="card-img-overlay align-items-start d-flex flex-row-reverse">
						<div className="d-flex">
							<span
								href="#"
								className="btn p-2 btn-outline-warning"
								style={{ color: "#ffffff", border: "#A2A1A1" }}>
								<i className="icono far fa-star" />
							</span>
						</div>
					</div>

					<div className="card-img-overlay align-items-end d-flex">
						<div className="d-flex" style={{ border: "none" }}>
							<p className="card-text text-left text-uppercase">{`${people.name} `}</p>
						</div>
					</div>
				</div>
			</div>
		);
	});
};

Characters.propTypes = {
	people: PropTypes.array,
	rows: PropTypes.array
};
