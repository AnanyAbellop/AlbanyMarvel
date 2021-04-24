import React from "react";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";

import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let long = store.people.length;
	let rows = 0;
	rows = long / 4;
	if (long % 4 != 0) {
		rows++;
	}
	//alert(long);

	return (
		<div>
			<div className="row mx-2">
				<div className="">
					<Characters people={store.people} />
				</div>
			</div>
		</div>
	);
};
