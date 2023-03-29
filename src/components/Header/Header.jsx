import React from "react";

const Header = () => {
	return (
		<div class="navbar bg-neutral w-full px-8">
			<div class="flex-1">
				<a class="btn btn-ghost normal-case text-xl text-white font-normal">
					Navbar
				</a>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
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
