import React from "react";

export default function Card(props) {
	return(
		<div className="card">
			<img src={require(`../images/${props.coverImg}`)}/>
			<div className="card__stats">
				<img src={require("../images/star.png")} className="card__star"/>
				<span>{props.rating}</span>
				<span className="grey">({props.reviewCount}) • </span>
				<span className="grey">{props.location}</span>
			</div>
			<p>{props.title}</p>
			<p><span className="bold">From {props.price}</span> / person</p>
		</div>
	)
}