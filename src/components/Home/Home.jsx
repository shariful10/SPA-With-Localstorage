import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<div className="movie-container col-span-2">
			{movies.map((movie) => (
				<SingleCart movie={movie}></SingleCart>
			))}
		</div>
	);
};

export default Home;
