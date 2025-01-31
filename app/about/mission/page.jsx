import Content from "../components/PageContent";

const Mission = () => {
	return (
		<section>
			{/* Hero  */}
			<div className="max-w-full mx-auto px-1 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<Content heroTitle="Our Mission">
					<>
						{/* Approach */}
						<div className="bg-neutral-900 rounded-2xl">
							{/* Approach */}
							<div className="max-w-5xl px-6 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
								{/* Title */}
								<div className="max-w-4xl mb-10 lg:mb-14 mx-auto">
									<h2 className="text-orange-300 font-semibold text-2xl md:text-4xl md:leading-tight text-center">
										Our Commitment to Excellence
									</h2>
									<p className="text-lg sm:text-xl text-gray-200 leading-loose sm:leading-loose sm:tracking-wide py-5">
										At Talent Vision School, our mission is more than just a
										statement; it&apos;s the heartbeat of our institution—a
										compass guiding us on our educational journey. Our core
										values form the foundation upon which we build a vibrant and
										nurturing school community. We are dedicated to fostering
										not only academic excellence but also character development,
										innovation, inclusivity, and a strong sense of
										responsibility. These values are not just words on paper;
										they are the principles that shape every facet of our
										educational philosophy and the experiences of our students.
										Let us delve deeper into our mission and values, which serve
										as the driving force behind our commitment to provide an
										exceptional education.
									</p>
								</div>
								{/* End Title */}
								{/* Grid */}
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
									<div className="aspect-w-16 aspect-h-9 lg:aspect-none">
										<img
											className="w-full object-cover rounded-xl"
											src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt="Features Image"
										/>
									</div>
									{/* End Col */}
									{/* Timeline */}
									<div>
										{/* Heading */}
										<div className="mb-4">
											<h3 className="text-[#ff0] text-xs font-medium uppercase">
												Steps
											</h3>
										</div>
										{/* End Heading */}
										{/* Item */}
										<div className="flex gap-x-5 ms-1">
											{/* Icon */}
											<div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
												<div className="relative z-10 size-8 flex justify-center items-center">
													<span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
														1
													</span>
												</div>
											</div>
											{/* End Icon */}
											{/* Right Content */}
											<div className="grow pt-0.5 pb-8 sm:pb-12">
												<p className="text-sm lg:text-base text-neutral-400">
													<span className="text-white">
														Market Research and Analysis:
													</span>
													Identify your target audience and understand their
													needs, preferences, and behaviors.
												</p>
											</div>
											{/* End Right Content */}
										</div>
										{/* End Item */}
										{/* Item */}
										<div className="flex gap-x-5 ms-1">
											{/* Icon */}
											<div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
												<div className="relative z-10 size-8 flex justify-center items-center">
													<span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
														2
													</span>
												</div>
											</div>
											{/* End Icon */}
											{/* Right Content */}
											<div className="grow pt-0.5 pb-8 sm:pb-12">
												<p className="text-sm lg:text-base text-neutral-400">
													<span className="text-white">
														Product Development and Testing:
													</span>
													Develop digital products or services that address the
													needs and preferences of your target audience.
												</p>
											</div>
											{/* End Right Content */}
										</div>
										{/* End Item */}
										{/* Item */}
										<div className="flex gap-x-5 ms-1">
											{/* Icon */}
											<div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
												<div className="relative z-10 size-8 flex justify-center items-center">
													<span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
														3
													</span>
												</div>
											</div>
											{/* End Icon */}
											{/* Right Content */}
											<div className="grow pt-0.5 pb-8 sm:pb-12">
												<p className="text-sm md:text-base text-neutral-400">
													<span className="text-white">
														Marketing and Promotion:
													</span>
													Develop a comprehensive marketing strategy to promote
													your digital products or services.
												</p>
											</div>
											{/* End Right Content */}
										</div>
										{/* End Item */}
										{/* Item */}
										<div className="flex gap-x-5 ms-1">
											{/* Icon */}
											<div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
												<div className="relative z-10 size-8 flex justify-center items-center">
													<span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
														4
													</span>
												</div>
											</div>
											{/* End Icon */}
											{/* Right Content */}
											<div className="grow pt-0.5 pb-8 sm:pb-12">
												<p className="text-sm md:text-base text-neutral-400">
													<span className="text-white">
														Launch and Optimization:
													</span>
													Launch your digital products or services to the
													market, closely monitoring their performance and user
													feedback.
												</p>
											</div>
											{/* End Right Content */}
										</div>
										{/* End Item */}
										<a
											className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
											href="#"
										>
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
												<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
												<path
													className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
													d="M14.05 2a9 9 0 0 1 8 7.94"
												/>
												<path
													className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
													d="M14.05 6A5 5 0 0 1 18 10"
												/>
											</svg>
											Schedule a call
										</a>
									</div>
									{/* End Timeline */}
								</div>
								{/* End Grid */}
							</div>
						</div>
						{/* End Approach */}
					</>
				</Content>
			</div>
		</section>
	);
};

export default Mission;
