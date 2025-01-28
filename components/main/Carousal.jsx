import Image from "next/image";
import girl from "@public/images/girl.jpg";
import gate1 from "@public/images/gate1.JPG";
import gate2 from "@public/images/gate2.JPG";

const Carousel = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div
				data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "isAutoPlay": true,
          "interval": 5000
        }'
				className="relative"
			>
				<CarouselBody />
				<CarouselControls />
				<CarouselPagination />
			</div>
		</div>
	);
};

const CarouselBody = () => {
	return (
		<div className="hs-carousel relative overflow-hidden w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-xl">
			<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
				<CarouselSlide
					src={girl}
					alt="Slide 1"
					title="First Slide"
					description="Description text here"
				/>
				<CarouselSlide
					src={gate1}
					alt="Slide 2"
					title="Second Slide"
					description="Description text here"
				/>
				<CarouselSlide
					src={gate2}
					alt="Slide 3"
					title="Third Slide"
					description="Description text here"
				/>
			</div>
		</div>
	);
};

const CarouselSlide = ({ src, alt, title, description }) => {
	return (
		<div className="hs-carousel-slide relative w-full flex-shrink-0">
			<div className="relative w-full h-full">
				<Image
					src={src}
					alt={alt}
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/20" />
				<div className="absolute bottom-8 left-8 text-white">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
						{title}
					</h2>
					<p className="mt-2 text-sm sm:text-base md:text-lg">{description}</p>
				</div>
			</div>
		</div>
	);
};

const CarouselControls = () => {
	return (
		<>
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
		</>
	);
};

const CarouselPagination = () => {
	return (
		<div className="absolute bottom-4 start-0 end-0">
			<div className="flex items-center justify-center gap-2">
				<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
				<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
				<span className="w-2.5 h-2.5 rounded-full bg-white/50 hs-carousel-active:bg-white transition-all duration-300" />
			</div>
		</div>
	);
};

export default Carousel;
