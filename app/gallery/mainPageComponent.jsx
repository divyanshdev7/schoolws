"use client";
import HeroSection from "./components/main/HeroSection";

const MainPage = ({ title, Component }) => {
	return (
		<>
			{/* Hero Section */}
			<HeroSection />

			{/* Events Section */}
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
				<h1 className="text-2xl text-center font-semibold">
					<span className="bg-gray-900 text-yellow-300 rounded-3xl p-2 px-10">
						{title}
					</span>
				</h1>

				{/* Render the passed component */}
				<Component />

				<div className="flex justify-center items-center py-8">
					<a
						className="inline-flex items-center gap-x-1 text-lg text-blue-700 hover:underline"
						href="#"
					>
						Explore more
						<svg
							className="shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</a>
				</div>
			</div>
			<hr />
		</>
	);
};

export default MainPage;
