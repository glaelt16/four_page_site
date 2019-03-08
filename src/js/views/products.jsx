import React from "react";
import { Link } from "react-router-dom";
import bacon from "../../img/bacon.jpg";
import "../../styles/home.css";

export class Products extends React.Component {
	render() {
		return (
			<div className="card text-center mt-5">
				<div className="container d-inline-block border border-light mx-2 justify-content-center">
					<img
						className="CardImg"
						top
						width="100%"
						src={bacon}
						alt="Card image cap"
					/>
					<h4 className="cardTitle text-center pt-2">
						{""}
						BIGGEST SALE
					</h4>
					<div className="cardText py-2 text-center">
						{" "}
						Lots of people go to Siesta Key for the beach (it’s one
						of the best in the country), but I have family there and
						they rave about the bacon at Sun Garden. Now, this
						article is about bacon, but if there were one food that
						could elevate bacon, it’s fried chicken. The Mississippi
						Queen dish combines their beloved bacon with their
						equally beloved chicken and waffles. After you eat, go
						for a long walk on the beach. I need to get back to
						Siesta Key.{" "}
					</div>
					<span className="divider" />
					<div className="footer border border-light">
						<div className="Button btn btn-primary "> Buy </div>
					</div>
				</div>
			</div>
		);
	}
}
