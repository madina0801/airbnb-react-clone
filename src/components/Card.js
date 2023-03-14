import React from "react";

export default function Card(props) {
	let badgeText;
	if (props.item.openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (props.item.location === "Online") {
		badgeText = "ONLINE"
	}
	return (
		<div className="card">
			{badgeText && <div className="card__badge">{badgeText}</div>}
			<img src={require(`../images/${props.item.coverImg}`)} className="card__image" />
			<div className="card__stats">
				<img src={require("../images/star.png")} className="card__star" />
				<span>{props.item.stats.rating}</span>
				<span className="grey">({props.item.stats.reviewCount}) • </span>
				<span className="grey">{props.item.location}</span>
			</div>
			<p className="card__title">{props.item.title}</p>
			<p className="card__price"><span className="bold">From {props.item.price}</span> / person</p>
		</div>
	)
}