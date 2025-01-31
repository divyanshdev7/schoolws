import React from "react";

const HeroSection = () => {
	return (
		<section>
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<div className="max-w-6xl text-center px-4 mx-auto">
					<h1 className="text-8xl md:text-9xl font-medium tracking-tighter">
						Gallery
					</h1>
				</div>
				<div className="max-w-6xl lg:py-2 mx-auto">
					<article className="mt-7 space-y-6 text-gray-600 text-xl">
						<div className="max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-5xl mx-auto">
								<div className="space-y-3 text-center">
									<h2 className="text-3xl font-bold">
										Capturing Moments, Creating Memories
									</h2>
									<p className="text-lg sm:text-xl text-gray-800">
										Welcome to the Talent Vision School gallery, where we
										celebrate the moments that shape our educational journey.
										Our gallery showcases the vibrant life of our school.
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
