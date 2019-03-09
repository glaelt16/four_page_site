import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "../../styles/blog.css";

function Blog(props) {
	const blog = [
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
	];

	const cardArray = blog.map((item, index) => {
		return (
			<div className="card m-5" key={index}>
				<h1 className="card-title">{item.title}</h1>
				<div className="Image">
					<img
						className="card-img-top"
						src={item.image}
						alt="Card image cap"
					/>
				</div>
				<div className="card-body">
					<p className="card-text">{item.body}</p>
				</div>
			</div>
		);
	});
	return <div>{cardArray}</div>;
}

Blog.propTypes = {
	blognew: PropTypes.array
	// 2) add here the new properties into the proptypes object
};

export default Blog;
