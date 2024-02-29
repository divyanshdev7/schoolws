
const Faqs = () => {
	return (
		<>
			{/* FAQ */}
			<div
				id="FAQ"
				className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 lg:px-8"
			>
				{/* Title */}
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-3xl md:text-4xl md:leading-tight dark:text-white">
						Your questions, answered
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Answers to the most frequently asked questions.
					</p>
				</div>
				{/* End Title */}
				<div className="max-w-2xl mx-auto">
					{/* Accordion */}
					<div className="hs-accordion-group">
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
							>
								Where is Talent Vision School located?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>

							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-one"
								className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
							>
								{/* answer  */}
								<p className="text-gray-800 dark:text-gray-200">
									Our school is located in the picturesque surroundings of
									Mamapar, P.O. Pichhaura, Distt. - Gorakhpur, approximately 10
									kilometers from Gorakhpur city.
								</p>
							</div>
						</div>
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
							id="hs-basic-with-title-and-arrow-stretched-heading-two"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
							>
								What grades or classes do you offer?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-two"
								className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
							>
								<p className="text-gray-800 dark:text-gray-200">
									We offer classes from Nursery to 8, covering primary to
									secondary education.
								</p>
							</div>
						</div>
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
							id="hs-basic-with-title-and-arrow-stretched-heading-three"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
							>
								How can I contact Talent Vision School?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-three"
								className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
							>
								<p className="text-gray-800 dark:text-gray-200">
									You can reach us through our Contact Page, which provides
									contact information, including phone numbers and email
									addresses.
								</p>
							</div>
						</div>
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
							id="hs-basic-with-title-and-arrow-stretched-heading-four"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
							>
								How do I apply for admission to Talent Vision School?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-four"
								className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
							>
								<p className="text-gray-800 dark:text-gray-200">
									You can find information on our admission process on our
									Admissions page. It includes details about application forms,
									deadlines, and requirements.
								</p>
							</div>
						</div>
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
							id="hs-basic-with-title-and-arrow-stretched-heading-five"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
							>
								Is transportation provided for students?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-five"
								className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
							>
								<p className="text-gray-800 dark:text-gray-200">
									Yes, we offer transportation services for students. You can
									find details about routes, schedules, and fees on our
									Transportation page.
								</p>
							</div>
						</div>
						<div
							className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
							id="hs-basic-with-title-and-arrow-stretched-heading-six"
						>
							<button
								className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
								aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
							>
								How can I apply for a job or a teaching position at Talent
								Vision School?
								<svg
									className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
								<svg
									className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</button>
							<div
								id="hs-basic-with-title-and-arrow-stretched-collapse-six"
								className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
							>
								<p className="text-gray-800 dark:text-gray-200">
									Job and teaching position applications can be submitted
									through our Career Opportunities page, which provides details
									on current openings and the application process.
								</p>
							</div>
						</div>
					</div>
					{/* End Accordion */}
				</div>
			</div>

			{/* End FAQ */}
		</>
	);
};

export default Faqs;
