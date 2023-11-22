import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
	const [header, setHeader] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		});
	});
	return (
		<header className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-300`}>
			<div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-y-0">
				{/* <a href="/">{header ? <img className="w-[160px]" src={LogoDark} alt="images" /> : <img className="w-[160px]" src={LogoWhite} alt="images" />}</a> */}
				{/* <a href="" className="btn btn-secondary btn-sm max-w-[240px] mx-auto">
					Book Now
				</a> */}
				<nav className={`${header ? "text-primary" : "text-white"} flex gap-x-4  font-tertiary tracking-[3px] text-[15px] items-center lg:gap-x-8`}>
					<a href="" className="hover:text-accent transition">
						Home
					</a>
					<a href="" className="hover:text-accent transition">
						Rooms
					</a>
					<a href="" className="hover:text-accent transition">
						Resturant
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
