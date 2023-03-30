import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = ({ handleWatchTime }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<div className="movie-container col-span-2 grid md:grid-cols-2 gap-5">
			{movies.map((movie) => (
				<SingleCart
					movie={movie}
					key={movie.id}
					handleWatchTime={handleWatchTime}></SingleCart>
			))}
		</div>
	);
};

export default Home;
