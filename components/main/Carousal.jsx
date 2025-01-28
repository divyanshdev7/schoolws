// Component: Carousal
import Image from "next/image";
import girl from "@public/images/girl.jpg";
import gate1 from "@public/images/gate1.JPG";
import gate2 from "@public/images/gate2.JPG";

const Carousel = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Main carousel container */}
			<div
				data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "isAutoPlay": true,
          "interval": 5000
        }'
				className="relative"
			>
				{/* Carousel viewport */}
				<div className="hs-carousel relative overflow-hidden w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-xl">
					{/* Slides container */}
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
						{/* Slide 1 */}
						<div className="hs-carousel-slide relative w-full flex-shrink-0">
							<div className="relative w-full h-full">
								<Image
									src={girl}
									alt="Slide 1"
									fill
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
									className="object-cover object-center"
								/>
								<div className="absolute inset-0 bg-black/20" />
								<div className="absolute bottom-8 left-8 text-white">
									<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
										First Slide
									</h2>
									<p className="mt-2 text-sm sm:text-base md:text-lg">
										Description text here
									</p>
								</div>
							</div>
						</div>
						{/* Slide 2 */}
						<div className="hs-carousel-slide relative w-full flex-shrink-0">
							<div className="relative w-full h-full">
								<Image
									src={gate1}
									alt="Slide 2"
									fill
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
									className="object-cover object-center"
								/>
								<div className="absolute inset-0 bg-black/20" />
								<div className="absolute bottom-8 left-8 text-white">
									<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
										Second Slide
									</h2>
									<p className="mt-2 text-sm sm:text-base md:text-lg">
										Description text here
									</p>
								</div>
							</div>
						</div>
						{/* Slide 3 */}
						<div className="hs-carousel-slide relative w-full flex-shrink-0">
							<div className="relative w-full h-full">
								<Image
									src={gate2}
									alt="Slide 3"
									fill
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
									className="object-cover object-center"
								/>
								<div className="absolute inset-0 bg-black/20" />
								<div className="absolute bottom-8 left-8 text-white">
									<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
										Third Slide
									</h2>
									<p className="mt-2 text-sm sm:text-base md:text-lg">
										Description text here
									</p>
								</div>
							</div>
						</div>

						{/* Similar structure for other slides */}
					</div>
				</div>

				{/* Navigation buttons */}
				<button
					type="button"
					className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex items-center justify-center w-12 h-full text-white hover:bg-black/30 transition duration-300"
					aria-label="Previous slide"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<button
					type="button"
					className="hs-carousel-next absolute inset-y-0 end-0 inline-flex items-center justify-center w-12 h-full text-white hover:bg-black/30 transition duration-300"
					aria-label="Next slide"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>

				{/* Pagination dots */}
				<div className="absolute bottom-4 start-0 end-0">
					<div className="flex items-center justify-center gap-2">
						<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
						<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
						<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
// <>
// 	{/* Features */}
// 	<div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
// 		<div
// 			className="min-h-[35vh] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]"
// 			style={{ backgroundImage: `url('${girl.src}')` }}
// 		>
// 			<div className="absolute bottom-0 left-0 right-0 max-w-xs text-center mx-auto p-6 md:left-auto md:text-left md:mx-0">
// 				{/* Card */}
// 				<div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800">
// 					<div className="hidden md:block">
// 						<h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">
// 							Explore TVJHS
// 						</h3>
// 						<p className="mt-2 text-gray-800 dark:text-gray-200">
// 							Learn more about our school.
// 						</p>
// 					</div>
// 					<div className="md:mt-16">
// 						<a
// 							className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
// 							href="#"
// 						>
// 							<svg
// 								className="w-4 h-auto"
// 								xmlns="http://www.w3.org/2000/svg"
// 								width={16}
// 								height={16}
// 								fill="currentColor"
// 								viewBox="0 0 16 16"
// 							>
// 								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
// 								<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
// 							</svg>
// 							Click here
// 						</a>
// 					</div>
// 				</div>
// 				{/* End Card */}
// 			</div>
// 		</div>
// 	</div>
// 	{/* End Features */}
// </>
