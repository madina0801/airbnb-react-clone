import React from "react";

export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (props.location === "Online") {
		badgeText = "ONLINE"
	}
	return (
		<div className="card">
			{badgeText && <div className="card__badge">{badgeText}</div>}
			<img src={require(`../images/${props.coverImg}`)} className="card__image" />
			<div className="card__stats">
				<img src={require("../images/star.png")} className="card__star" />
				<span>{props.rating}</span>
				<span className="grey">({props.reviewCount}) • </span>
				<span className="grey">{props.location}</span>
			</div>
			<p className="card__title">{props.title}</p>
			<p className="card__price"><span className="bold">From {props.price}</span> / person</p>
		</div>
	)
}