"use client";
import TabButton from "@app/about/components/TabButton";
import TabContent from "@app/about/components/TabContent";
import "/app/about/styles.css";
import "./lightbox/index.css";
import App from "./lightbox/App";
import EventCards from "./components/EventCards";

const Gallery = () => {
	return (
		<>
			<section>
				{/* Hero*/}
				<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
					<div className="max-w-6xl text-center px-4 mx-auto">
						<h1 className="w-full block font-medium text-8xl sm:text-8xl md:text-8xl lg:text-9xl tracking-tighter">
							Gallery
						</h1>
					</div>
					<div className="max-w-6xl lg:py-2 mx-auto">
						<article className="mt-7 space-y-6 text-gray-600 text-xl font-satoshi">
							{/* Blog Article */}
							<div className="max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mx-auto">
								<div className="max-w-5xl mx-auto">
									{/* Content */}
									<div className="space-y-6 md:space-y-8">
										<div className="space-y-3">
											<h2 className="text-3xl font-bold md:text-3xl py-1 text-center ">
												Capturing Moments, Creating Memories
											</h2>
											<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
												Welcome to the gallery of Talent Vision School, where we
												cherish and celebrate the moments that shape our
												educational journey. Our gallery is a visual testament
												to the vibrant and dynamic life at our school,
												showcasing the various facets of our academic and
												extracurricular activities.
											</p>

											<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
											{/* <LightboxGallery /> */}
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
				<h1 className="text-2xl text-center font-semibold">
					<span className="bg-gray-900 text-yellow-300 rounded-3xl p-2 px-10">
						Events
					</span>
				</h1>
				<EventCards />
				<div>
					<div className="flex justify-center items-center py-8">
						<a
							className="inline-flex items-center gap-x-1 text-lg text-blue-700 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
							href="#"
						>
							Explore more
							<svg
								className="shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</a>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Gallery;
