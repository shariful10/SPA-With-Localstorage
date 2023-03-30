import React, { useState } from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
	const [watchTime, setWatchTime] = useState("");

	const handleWatchTime = (time) => {
		const previousWatchTime = JSON.parse(
			localStorage.getItem("watch-time")
		);

		if (previousWatchTime) {
			const sum = previousWatchTime + time;
			localStorage.setItem("watch-time", sum);
			setWatchTime(sum);
		} else {
			localStorage.setItem("watch-time", time);
			setWatchTime(time);
		}
	};

	return (
		<div>
			<Header />
			<div className="main">
				<div className="container grid md:grid-cols-3 gap-5 mx-auto mt-10">
					<Home handleWatchTime={handleWatchTime} />
					<SideCart watchTime={watchTime} />
				</div>
			</div>
			<Details />
		</div>
	);
};

export default App;
