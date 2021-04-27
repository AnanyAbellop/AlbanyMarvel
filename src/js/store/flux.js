const baseURL = "https://gateway.marvel.com/v1/";
const publicKey = "510e71e05065192837ccf6f17198da2e";
const privateKey = "1f2a3670b2fd2b0f7e2c43a029fa5669aa2dac77";
const fechas = "1619490817";
const hash = "4759b08297a04cdb8b03dcc193a7602f";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			rows: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getSuperHeroes: async () => {
				const store = getStore();
				try {
					const response = await fetch(
						`${baseURL}public/characters?ts=${fechas}&apikey=510e71e05065192837ccf6f17198da2e&hash=${hash}`
					);

					if (response.ok) {
						let people = await response.json();
						setStore({
							people: people.data.results
						});
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error!!!!!: ${error}`);
				}
			},
			getHero: async superHero => {
				const store = getStore();
				console.log("estiy en heroe");
				superHero = superHero.replaceAll(" ", "%20");
				try {
					const response = await fetch(
						`${baseURL}public/characters?name=${superHero}&ts=${fechas}&apikey=510e71e05065192837ccf6f17198da2e&hash=${hash}`
					);

					if (response.ok) {
						let people = await response.json();
						setStore({
							people: people.data.results
						});
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error!!!!!: ${error}`);
				}
			},
			getRows: () => {
				var store = getStore();
				var supers = store.people;
				var long = supers.length;
				var filas = [];
				var cont = 0;
				var long2 = Math.floor(long / 4);
				if (long % 4 !== 0) {
					long2++;
				}
				for (var i = 0; i < long2; i++) {
					filas[i] = new Array();
					for (var j = 0; j < 4; j++) {
						filas[i][j] = supers[cont];
						cont++;
						if (cont === long) {
							break;
						}
					}
				}
				setStore({ rows: filas });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
