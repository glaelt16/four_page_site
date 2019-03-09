import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
<<<<<<< HEAD
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
				<hr />
				<Link to="/demo">
					<button className="btn btn-primary">
						Check the Context in action
					</button>
				</Link>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		);
=======
		return <p />;
>>>>>>> d655f9bb823d218bb266b1a58dea158de16291d7
	}
}
