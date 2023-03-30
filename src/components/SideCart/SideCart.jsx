import React from "react";

const SideCart = ({ watchTime }) => {
	return (
		<div className="card border">
			<h1 className="text-3xl font-semibold">My Cart</h1>
			<div className="mt-10">
				<p className="mb-5">Total Watch Time</p>
				<input
					type="text"
					value={0}
					className="input input-bordered w-full max-w-xs focus:outline-none"
				/>
			</div>
			<h5 className="mt-10 text-2xl font-semibold">Add Break Time</h5>
			<div className="flex justify-center gap-3 my-5">
				<button className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black text-2xl">
					15
				</button>
				<button className="btn bg-yellow-400 hover:bg-yellow-400 border-0 text-black text-2xl">
					20
				</button>
				<button className="btn bg-red-400 hover:bg-red-400 border-0 text-black text-2xl">
					25
				</button>
			</div>
			<input
				type="text"
				value={0}
				className="input input-bordered w-full max-w-xs focus:outline-none mx-auto"
			/>
			<button className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black mt-10">
				Complete
			</button>
		</div>
	);
};

export default SideCart;
