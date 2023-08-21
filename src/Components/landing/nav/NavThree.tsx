import { useState } from "react";

const NavThree = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section>
			<nav className="container lg:p-6 lg:mx-auto lg:flex lg:justify-between lg:items-center">
				<div className="flex px-4 pt-4 lg:p-0 items-center justify-between">
					<a href="#">
						<img
							className="w-auto h-6 sm:h-7"
							src="https://merakiui.com/images/full-logo.svg"
							alt=""
						/>
					</a>

					<div className="flex lg:hidden">
						<button
							onClick={() => {
								setIsOpen(!isOpen);
							}}
							type="button"
							className=" dark:text-gray-200 border rounded p-2 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="toggle menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 8h16M4 16h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div className="w-full my-5 lg:my-0 px-6 lg:w-auto lg:flex lg:items-center">
					<div
						className={`${
							isOpen ? "flex" : "hidden"
						}  border-y-2 lg:flex  lg:border-0 flex-col items-center space-y-4 lg:mt-0 lg:flex-row lg:space-y-0`}
					>
						<a className="lg:mx-6 pt-4 lg:p-0 hover:text-primary" href="#">
							Home
						</a>
						<a className="lg:mx-6 hover:text-primary" href="#">
							Components
						</a>
						<a className="lg:mx-6 hover:text-primary" href="#feature">
							Features
						</a>
						<a className="lg:mx-6 hover:text-primary" href="#pricing">
							Pricing
						</a>
						<a className="lg:mx-6 hover:text-primary" href="/login">
							Sign In
						</a>
						<a
							className="pb-4 lg:mx-6 lg:pb-0 lg:btn lg:btn-outline lg:btn-primary lg:btn-sm"
							href="/register"
						>
							Sign Up
						</a>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default NavThree;
