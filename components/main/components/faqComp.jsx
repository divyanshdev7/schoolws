import React from "react";

const FaqComp = (props) => {
	return (
		<>
			{/* Title */}
			{/* End Title */}
			{/* Accordion */}
			<div className="hs-accordion-group">
				<div
					className={`hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] ${props.className}`}
					id={`hs-basic-with-title-and-arrow-stretched-heading-${props.id}`}
				>
					<button
						className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
						aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${props.id}`}
					>
						{props.ques}
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
						id={`hs-basic-with-title-and-arrow-stretched-collapse-${props.id}`}
						className={`hs-accordion-content ${props.collapseClass} w-full overflow-hidden transition-[height] duration-300`}
						aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${props.id}`}
					>
						<p className="text-gray-800 dark:text-gray-200">{props.ans}</p>
					</div>
				</div>
			</div>
			{/* End Accordion */}
		</>
	);
};

export default FaqComp;
