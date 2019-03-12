import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";
import blog from "./views/blog.jsx";

import { Products } from "./views/products.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first componentnpm run c9
import { Jumbotron } from "./component/jumbotron.jsx";
<<<<<<< HEAD
=======
>>>>>>> f71e8d20ced2084d6649d9a403ea3fb75502c072
>>>>>>> 6d52380e767450ade20cd46414930d88ce74eb6a

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
<<<<<<< HEAD
					<Switch>
						<Route exact path="/home" component={Home} />
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

					<Jumbotron />

>>>>>>> f71e8d20ced2084d6649d9a403ea3fb75502c072
>>>>>>> 022740a0b2413bcb024f5bfbe6f2dc12885cab19
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blog" component={blog} />
>>>>>>> 6d52380e767450ade20cd46414930d88ce74eb6a
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/products" component={Products} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Jumbotron />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
