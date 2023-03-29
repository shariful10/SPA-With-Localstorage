import React from "react";

const Header = () => {
	return (
		<div className="navbar bg-neutral w-full px-8">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl text-white font-normal">
					Navbar
				</a>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered font-medium"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
