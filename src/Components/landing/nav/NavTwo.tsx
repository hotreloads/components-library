import { useState } from "react";

const NavTwo = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav
			className={`flex flex-col lg:flex-row items-center lg:justify-between  py-4 lg:px-12 ${
				isOpen ? "shadow" : "shadow-none"
			} lg:shadow `}
		>
			<div className="flex border-b-2 lg:border-0  justify-between lg:w-auto w-full pl-6 pr-2 pb-5 lg:pb-0">
				<div className="flex items-center flex-shrink-0  mr-16">
					<span className="font-semibold text-xl ">My Navbar</span>
				</div>
				<div className="block lg:hidden ">
					<button
						onClick={() => {
							setIsOpen(!isOpen);
						}}
						id="nav"
						className="flex items-center px-3 py-2 border-2 rounded text-neutral"
					>
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
			</div>

			<div
				className={`${
					isOpen ? "flex" : "hidden"
				} flex-col lg:flex-row lg:flex-grow lg:flex lg:items-center lg:w-auto lg:px-3`}
			>
				<div className="flex flex-col lg:flex-row text-md font-bold lg:flex-grow">
					<a
						href="#responsive-header"
						className="mt-4 lg:inline-block lg:mt-0 hover:text-primary px-4 py-2  mr-2"
					>
						Menu 1
					</a>
					<a
						href="#feature"
						className="mt-4 lg:inline-block lg:mt-0 hover:text-primary px-4 py-2  mr-2"
					>
						Features
					</a>
					<a
						href="#pricing"
						className="mt-4 lg:inline-block lg:mt-0 hover:text-primary px-4 py-2  mr-2"
					>
						Pricing
					</a>
				</div>

				<div className="flex flex-col lg:flex-row text-md font-bold">
					<a href="/login" className="px-4 py-2  hover:text-primary mt-4 lg:mt-0">
						Sign In
					</a>

					<a
						href="/register"
						className="px-4 py-2 lg:rounded lg:hover:text-primary-content lg:border lg:hover:bg-primary mt-4 lg:mt-0"
					>
						Sign Up
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavTwo;
