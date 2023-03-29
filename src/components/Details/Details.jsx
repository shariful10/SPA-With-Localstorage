import React from "react";

const Details = () => {
	return (
		<div className="grid md:grid-cols-2 justify-center items-center mt-10">
			<div>
				<h1 className="text-4xl font-semibold mb-5">Contact With Us</h1>
				<input
					placeholder="Type Your Name"
					className="input input-bordered w-full max-w-xs focus:outline-none mb-5"
				/>
				<br />
				<input
					placeholder="Type Your Email"
					className="input input-bordered w-full max-w-xs focus:outline-none mb-5"
				/>
				<br />
				<textarea
					className="textarea textarea-bordered w-2/6 focus:outline-none h-36 mb-5"
					placeholder="Type Your Message"></textarea>
				<br />
				<button className="btn bg-blue-400 hover:bg-blue-400 text-black border-0 w-2/6">Send Email</button>
			</div>
			<div className="w-2/4">
				<img src="../../../public/login.png" alt="" />
			</div>
		</div>
	);
};

export default Details;
