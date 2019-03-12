import React from "react";
import { Context } from "../store/appContext.jsx";

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
