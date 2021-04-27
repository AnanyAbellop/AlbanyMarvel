import React, { useState, useContext } from "react";
import marvelImage from "../../img/Marvel-Logotipo.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const [superHero, setSuperHero] = useState("");
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src={marvelImage} width="60" height="50" alt="" />
				</a>
			</Link>
			<div className="ml-auto">
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="text"
						name="SuperHero"
						onChange={event => {
							setSuperHero(event.target.value);
							actions.getHero(superHero);
							if (event.target.value === "") {
								actions.getSuperHeroes();
							}
						}}
						value={superHero}
						placeholder="Buscar"
					/>
					<span
						href="#"
						className="btn p-2 btn-outline-warning"
						style={{ color: "#DFDDDD", border: "#A2A1A1" }}>
						<i className="icono far fa-star" />
					</span>
				</form>
			</div>
		</nav>
	);
};
