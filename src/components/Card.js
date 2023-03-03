import React from "react";

export default function Card() {
	return(
		<div className="card">
			<img src={require("../images/zaferes_img.png")}/>
			<div className="card__stats">
				<img src={require("../images/star.png")} className="card__star"/>
				<span>5.0</span>
				<span className="grey">(6) •</span>
				<span className="grey">USA</span>
			</div>
			<p>Life Lessons with Katie Zaferes</p>
			<p><span className="bold">From $136</span> / person</p>
		</div>
	)
}