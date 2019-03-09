import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron />
			</div>
		);
	}
}
