import React from "react";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";

import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("store.rows", store.rows);
	return (
		<div className="container">
			<Characters rows={store.rows} />
			{/* <div className="row justify-content-start my-2">
				<Characters people={store.people} />
			</div> */}
		</div>
	);
};
