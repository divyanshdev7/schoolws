import React from "react";
import Link from "next/link";
const Enroll = () => {
	return (
		<div>

			<section className="bg-black">
				<div className="p-8 md:p-12 lg:px-16 lg:py-14 flex flex-col justify-center items-center">
					<div className="text-center">
						<h2 className="text-2xl text-white sm:text-3xl md:text-5xl">
							ENROLL NOW
						</h2>

						<p className="max-w-xl text-white/90 md:mt-6 md:block md:text-xl md:leading-relaxed">
							Join our educational journey today and give your child the gift of
							knowledge at Talent Vision Junior High School.
						</p>

						<div className="mt-4 sm:mt-8">
							<Link
								href="/contact-us"
								className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Enroll;
