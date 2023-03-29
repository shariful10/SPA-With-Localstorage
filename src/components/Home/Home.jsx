import React from "react";

const Home = () => {
	return (
		<div className="col-span-2">
			<div className="movie-container">
				<div className="movie-card card border">
					<div className="movie-poster mx-auto">
						<img className="rounded-lg w-2/4 mx-auto" src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
					</div>
					<h3 className="text-4xl font-semibold my-5">Dark King</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
					<div className="timeAndRating flex justify-around my-5">
						<p>Watch Time</p>
						<p>Rating</p>
					</div>
					<div className="">
						<button className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black w-2/4">
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
