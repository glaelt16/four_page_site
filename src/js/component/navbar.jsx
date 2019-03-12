import React from "react";
import { Context } from "../store/appContext.jsx";

<<<<<<< HEAD
export const Navbar = () => {
	return (
		<div className="container-fluid p-0 ">
			<nav className="navbar navbar-expand-sm  navbar navbar-dark bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav  ml-auto ">
						<Context.Consumer>
							{({ store }) => {
								return store.navBarArray.map(
									(navItem, index) => {
										return (
											<li
												className="nav-item"
												key={index}>
												<a
													className="nav-link"
													href={navItem.url}>
													{navItem.label}
												</a>
											</li>
										);
									}
								);
							}}
						</Context.Consumer>
					</ul>
				</div>
			</nav>
		</div>
	);
};
=======
export class Navbar extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0 ">
				<nav className="navbar navbar-expand-sm  navbar navbar-dark bg-dark">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav  ml-auto ">
							<li className="nav-item active ">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Service
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
>>>>>>> 6d52380e767450ade20cd46414930d88ce74eb6a
