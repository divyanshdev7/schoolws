import React from "react";
import Link from "next/link";

const Enroll = () => {
	return (
		<div>
			<section className="max-w-[90%] mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black relative">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
				<div className="relative p-8 md:p-16 lg:px-20 lg:py-20 flex flex-col justify-center items-center">
					<div className="text-center max-w-3xl mx-auto space-y-8">
						<div className="space-y-4">
							<div className="inline-block px-4 py-1.5 rounded-full border border-blue-500 text-yellow-200 text-md mb-5">
								READY TO BEGIN ?
							</div>
							<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
								Admissions Open
							</h2>
							<div className="space-y-2">
								<p className="text-2xl md:text-3xl text-blue-400 font-semibold">
									Academic Session 2025-26
								</p>
								<p className="text-xl text-yellow-400">Nursery to Class 8</p>
							</div>
						</div>

						<div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

						<div className="space-y-4">
							<p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
								Give your child the gift of exceptional education today.
							</p>
						</div>

						<div className="mt-10">
							<Link
								href="/contact-us"
								className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-800 to-blue-900 px-10 py-6 text-xl font-bold text-white tracking-wide shadow-[0_20px_50px_rgba(8,_112,_184,_0.7) transition-all duration-300 ease-in-out hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] hover:scale-105 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-blue-400/30"
							>
								CONTACT US
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Enroll;
