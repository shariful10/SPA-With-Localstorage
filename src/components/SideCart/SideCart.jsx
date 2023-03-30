import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
	const [time, setTime] = useState(watchTime);
	const [breakTime, setBreakTime] = useState(0);

	useEffect(() => {
		const getStoredWatchTime = localStorage.getItem("watch-time");
		setTime(getStoredWatchTime);
		const getBreakTime = localStorage.getItem("break-time");
		setBreakTime(getBreakTime);
	}, [watchTime]);

	const handleBreakTime = (bt) => {
		localStorage.setItem("break-time", bt);
		setBreakTime(bt);
	};

	return (
		<div className="card border sticky top-0 h-2/6">
			<h1 className="text-3xl font-semibold">My Cart</h1>
			<div className="mt-10">
				<p className="mb-5">Total Watch Time</p>
				<input
					type="text"
					value={time}
					className="input input-bordered w-full max-w-xs focus:outline-none"
				/>
			</div>
			<h5 className="mt-10 text-2xl font-semibold">Add Break Time</h5>
			<div className="flex justify-center gap-3 my-5">
				<button
					onClick={() => handleBreakTime(15)}
					className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black text-2xl">
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
				value={breakTime}
				className="input input-bordered w-full max-w-xs focus:outline-none mx-auto"
			/>
			<button className="btn bg-blue-400 hover:bg-blue-400 border-0 text-black mt-10">
				Complete
			</button>
		</div>
	);
};

export default SideCart;
