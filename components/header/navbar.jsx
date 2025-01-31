import { useState, useEffect } from "react";
import Navlist from "./navlist";
import Link from "next/link";
import menuItems from "./menu-items.jsx";

const Navbar = () => {
	// const handleLinkClick = () => {
	// 	const navLinks = document.querySelectorAll(".navLink");
	// 	const mediaQuery = window.matchMedia("(max-width: 768px)");

	// 	if (mediaQuery.matches) {
	// 		navLinks.forEach((link) => {
	// 			link.setAttribute("data-hs-overlay", "#navbar-offcanvas-example");
	// 		});
	// 	} else {
	// 		navLinks.forEach((link) => {
	// 			link.removeAttribute("data-hs-overlay");
	// 		});
	// 	}
	// };

	// useEffect(() => {
	// 	handleLinkClick();
	// 	window.addEventListener("resize", handleLinkClick);
	// 	return () => {
	// 		window.removeEventListener("resize", handleLinkClick);
	// 	};
	// });

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if window is defined
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth <= 768);

			const handleResize = () => {
				setIsMobile(window.innerWidth <= 768);
			};

			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	return (
		<>
			{/*School Heading Banner*/}
			<div className="hidden md:block">
				<div
					id="ab-full-width-with-dismiss-button-on-blue-bg"
					className="hs-removing:-translate-y-full bg-black"
				>
					<div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 mx-auto">
						<div className="flex flex-col">
							<p className="text-white md:mx-auto mx-auto font-light text-2xl sm:text-5xl lg:text-6xl lg:tracking-tight">
								Talent Vision Jr. High School
							</p>
							<p className="uppercase mt-2 text-white md:mx-auto mx-auto font-light text-2xl sm:text-sm lg:text-sm lg:tracking tracking-widest">
								mamapar, sewai bazaar, gorakhpur, UP - 273401
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* End School Heading Banner -----------------------------------------------------------------------------*/}
			<header className="sticky top-0 z-[9999] flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 sm:py-3 dark:bg-gray-800 dark:border-gray-700 bg-zinc-950 md:bg-white">
				<nav
					className="border-red max-w-7xl flex flex-wrap items-center justify-between w-full mx-auto px-3 md:flex md:items-center md:justify-center md:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="md:hidden flex items-center justify-center md:z-[9999]">
						<Link
							className="flex-none text-xl font-semibold dark:text-white"
							href="/"
							aria-label="School Name"
						>
							<span className="text-slate-300 font-bold tracking-tight 2xs:text-2xl text-xl cursor-pointer">
								Talent Vision Jr. High School
							</span>
						</Link>
					</div>
					<div className="flex items-center ml-auto md:ml-0 md:order-3">
						{/*Hamburger Menu ------------------------------------------------------------------------------------------*/}
						<div className="md:hidden">
							<button
								type="button"
								className="p-1 inline-flex justify-center items-center gap-2 rounded-md font-medium shadow-sm align-middle  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-white transition-all text-md dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
								data-hs-overlay="#navbar-offcanvas-example"
								aria-controls="navbar-offcanvas-example"
								aria-label="Toggle navigation"
							>
								<svg
									className="w-8 h-8"
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									fill="currentColor"
									viewBox="0 0 23 23"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
										fill="white"
									></path>
								</svg>
							</button>
						</div>
						{/* End Hamburger Menu ---------------------------------------------------------------------------------*/}
					</div>
					<div
						id="navbar-offcanvas-example"
						className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-600 transform h-full max-w-xs w-full z-[60] bg-white border-r basis-full grow md:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-r-transparent md:transition-none md:translate-x-0  md:basis-auto dark:bg-gray-800 dark:border-r-gray-700 md:dark:border-r-transparent hidden"
						tabIndex={1}
						data-hs-overlay-close-on-resize="1"
					>
						{/* imp in responsive */}
						<div className="flex flex-col gap-y-4 gap-x-0 mt-12 text-2xl md:text-lg md:py-0 sm:py-0 sm:gap-y-1 sm:gap-x-0 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 sm:ml-4 ml-0 sm:text-blue-800 md:text-red-800 ">
							{/* Home  */}
							<Link
								className="navLink font-medium text-gray-900 hover:text-red-600 px-6 sm:py-3 md:py-0 sm:px-0 dark:text-blue-500 hover-ul-animation"
								href="/"
								aria-current="page"
								{...(isMobile
									? { "data-hs-overlay": "#navbar-offcanvas-example" }
									: {})}
								// data-hs-overlay="#navbar-offcanvas-example"
								// onClick={handleLinkClick}
							>
								Home
							</Link>

							{/* About , Admissions, Academics, Gallery, Online  */}
							{menuItems.map((menuItem, index) => (
								<Navlist
									key={index}
									menuItems={menuItem.items}
									navTitle={menuItem.navTitle}
									uniqueId={index}
									// onClick={handleLinkClick}
								/>
							))}

							{/* Gallery 
							<Link
								className="navLink font-medium text-gray-900 hover:text-red-600 px-6 sm:py-3 md:py-0 sm:px-0 dark:text-blue-500 hover-ul-animation"
								href="/gallery"
								aria-current="page"
								{...(isMobile
									? { "data-hs-overlay": "#navbar-offcanvas-example" }
									: {})}
								// data-hs-overlay="#navbar-offcanvas-example"
								// onClick={handleLinkClick}
							>
								Gallery
							</Link> */}

							{/* Contact */}
							<Link
								className="navLink font-medium text-gray-900 hover:text-red-600 px-6 sm:py-3 md:py-0 sm:px-0 dark:text-blue-500 hover-ul-animation"
								href="/contact-us"
								aria-current="page"
								{...(isMobile
									? { "data-hs-overlay": "#navbar-offcanvas-example" }
									: {})}
								// onClick={handleLinkClick}
							>
								Contact Us
							</Link>
							{/* End Contact */}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;