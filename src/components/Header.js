import React, { useState, useEffect } from "react";
import Logo from "../assets/img/cranesoft.jpg";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [header, setHeader] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const baseUrl = useSelector((state) => state.company.baseUrl);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-300`}>
			<div className="container mx-auto flex items-center justify-between">
				<a href="/">
					<img className="w-[50px]" src={Logo} alt="images" />
				</a>

				<div className="lg:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? <FaTimes className={`${header ? "text-primary" : "text-white"} w-6 h-6`} /> : <FaBars className={`${header ? "text-primary" : "text-white"} w-6 h-6`} />}
					</button>
				</div>

				<nav
					className={`${
						menuOpen ? "flex" : "hidden"
					}  lg:text-accent lg:flex flex-col lg:flex-row lg:items-center gap-x-4 font-tertiary tracking-[3px] text-[15px] lg:gap-x-8 absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto shadow-lg lg:shadow-none`}
				>
					<a href="/" className="hover:text-accent transition py-2 lg:py-0 lg:px-4">
						Home
					</a>
					<a href="" className="hover:text-accent transition py-2 lg:py-0 lg:px-4">
						Rooms
					</a>
					<a href="" className="hover:text-accent transition py-2 lg:py-0 lg:px-4">
						Restaurant
					</a>
					<a href={`${baseUrl}/guest/login`} className="bg-accent text-white py-2 px-6 mt-4 lg:mt-0 lg:ml-4 lg:px-10 lg:py-2 lg:block">
						Login
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
