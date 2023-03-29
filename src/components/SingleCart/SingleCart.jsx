import React from "react";

const SingleCart = ({movie}) => {
	return (
		<div className="movie-card card border">
			<div className="movie-poster mx-auto">
				<img
					className="rounded-lg w-2/4 mx-auto"
					src={movie.poster}
					alt=""
				/>
			</div>
			<h3 className="text-4xl font-semibold my-5">{movie.movieName}</h3>
			<p>{movie.description}</p>
			<div className="timeAndRating flex justify-around my-5">
				<p>Watch Time: {movie.watchTime}min</p>
				<p>IMDB Ratings: {movie.imdbRating} stars</p>
			</div>
			<div className="">
				<button className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black w-2/4">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default SingleCart;
