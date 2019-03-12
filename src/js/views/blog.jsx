import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "../../styles/blog.css";

function Blog(props) {
	return (
		<Context.Consumer>
			{({ store }) => {
				return store.blog.map((item, index) => {
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
			}}
		</Context.Consumer>
	);
}

export default Blog;
