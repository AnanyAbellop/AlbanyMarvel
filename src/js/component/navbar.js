import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src="https://bit.ly/3tInyMu" width="30" height="30" alt="" />
				</a>
			</Link>
			<div className="ml-auto">
				<form className="form-inline">
					<button className="btn my-2 my-sm-0" type="submit">
						<i className="fa fa-search" aria-hidden="true" />
					</button>
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				</form>
			</div>
		</nav>
	);
};
