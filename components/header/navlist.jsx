import NavListItem from "./nav-list-item";
import { useState, useEffect } from "react";

const Navlist = ({ menuItems, navTitle, uniqueId }) => {
	// const handleLinkClick = () => {
	// 	const dropDownMenuId = document.getElementById(`dropMenu-${uniqueId}`);
	// 	const mediaQuery = window.matchMedia("(max-width: 768px)");
	// 	if (mediaQuery.matches) {
	// 		dropDownMenuId.setAttribute(
	// 			"data-hs-overlay",
	// 			"#navbar-offcanvas-example"
	// 		);
	// 	} else {
	// 		dropDownMenuId.removeAttribute("data-hs-overlay");
	// 	}
	// };
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
		<div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] sm:py-4">
			<button
				type="button"
				className="flex items-center w-full text-gray-900 hover:text-red-600 font-medium px-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500 hover-ul-animation"
			>
				{navTitle}
				<svg
					className="ml-2 w-2.5 h-2.5 text-gray-700 hidden"
					width={16}
					height={16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
						stroke="currentColor"
						strokeWidth={2}
						strokeLinecap="round"
					/>
				</svg>
			</button>

			{/* Submenu here */}
			<div
				// id="dropMenu"
				id={`dropMenu-${uniqueId}`}
				className="hidden text-sm hs-dropdown-menu hs-dropdown-auto-close-outside transition-[opacity,margin] duration-[1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg ml-3 py-2 px-3 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"
				// data-hs-overlay="#navbar-offcanvas-example"
				{...(isMobile
					? { "data-hs-overlay": "#navbar-offcanvas-example" }
					: {})}
			>
				{menuItems.map((menuItem, index) => (
					<NavListItem key={index} menuItem={menuItem} />
				))}
			</div>
		</div>
	);
};

export default Navlist;
