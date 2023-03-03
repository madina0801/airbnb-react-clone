import React from "react";

export default function Grid() {
	return (
		<section className="grid">
			<img src={require("../images/imgs_group.png")} className="grid__photo" />
			<h1 className="grid__title">Online Experiences</h1>
			<p className="grid__desc">Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving home.</p>
		</section>
	)
}