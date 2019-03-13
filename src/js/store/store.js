const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//NavBar Array
			navBarArray: [
				{ label: "Home", url: "/home" },
				{ label: "Products", url: "/Products" },
				{ label: "Blog", url: "/Blog" },
				{ label: "Contact Us", url: "/Contactus" },
				{ label: "Shooping Cart", url: "/cart" }
			],

			blog: [
				{
					title: "Bacon",
					image:
						"https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g",
					body:
						"Bacon ipsum dolor amet alcatra bacon meatball bresaola prosciutto, biltong cow corned beef. Burgdoggen fatback boudin, landjaeger pork belly chuck pig turducken"
				},
				{
					title: "Love Bacon",
					image:
						"https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					body:
						"Spicy jalapeno bacon ipsum dolor amet duis esse drumstick ribeye, est veniam pig fugiat minim elit rump.	Bresaola ipsum jowl filet mignon, irure spare ribs nisi."
				}
			]
		},

		actions: {
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
