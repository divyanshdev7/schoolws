// Component: Carousal
import Image from "next/image";
import girl from "@public/images/girl.jpg";
const Carousal = () => {
	return (
		<>
			{/* Slider */}
			<div
				data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
				className="relative"
			>
				<div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-gray-100 p-6">
								<span className="self-center text-4xl transition duration-700">
									{/* <Image
										src={girl}
										alt="girl image"
										className="object-cover w-full h-full"
									/> */}
									First Slide
								</span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-gray-200 p-6">
								<span className="self-center text-4xl transition duration-700">
									Second slide
								</span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-gray-300 p-6">
								<span className="self-center text-4xl transition duration-700">
									Third slide
								</span>
							</div>
						</div>
					</div>
				</div>
				<button
					type="button"
					className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
				>
					<span className="text-2xl" aria-hidden="true">
						<svg
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</span>
					<span className="sr-only">Previous</span>
				</button>
				<button
					type="button"
					className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
				>
					<span className="sr-only">Next</span>
					<span className="text-2xl" aria-hidden="true">
						<svg
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</span>
				</button>
				<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer" />
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer" />
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer" />
				</div>
			</div>
			{/* End Slider */}
		</>
	);
};

export default Carousal;
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
