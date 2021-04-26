import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Characters = ({ rows }) => {
	const { store, actions } = useContext(Context);
	console.log("Soy rows C", rows);
	rows.map((element, index) => {
		element[index].map((people, idx) => {
			let thumbnail = people.thumbnail.path + "." + people.thumbnail.extension;
			return (
				<div className="col-3 text-center" key={idx}>
					<div
						className="card bg-dark text-white"
						style={{ width: "18rem", marginRight: "3rem", height: "428px" }}>
						<img className="card-img align-items-end" src={thumbnail} alt="Card image" />
						<div className="card-img-overlay ">
							<p className="card-text text-left text-uppercase">{`${people.name}`}</p>
						</div>
					</div>
				</div>
			);
		});
	});
};

Characters.propTypes = {
	rows: PropTypes.arrayOf
};

// export const Characters = ({ people }) => {
// 	const { store, actions } = useContext(Context);
// 	console.log("people", people);

// 	return people.map((people, index) => {
// 		let thumbnail = people.thumbnail.path + "." + people.thumbnail.extension;
// 		return (
// 			<div className="col-3 text-center" key={index}>
// 				<div
// 					className="card bg-dark text-white"
// 					style={{ width: "18rem", marginRight: "3rem", height: "428px" }}>
// 					<img className="card-img align-items-end" src={thumbnail} alt="Card image" />
// 					<div className="card-img-overlay ">
// 						<p className="card-text text-left text-uppercase">{`${people.name} `}</p>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	});
// };

// Characters.propTypes = {
// 	people: PropTypes.array
// };
