import React from "react";

const FaqItem = ({ question, answer, id, isActive, isHidden }) => {
	return (
		<div
			className={`hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] ${isActive ? "active" : ""}`}
			id={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
		>
			<button
				className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
				aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
			>
				{question}
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
				id={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
				className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isHidden ? "hidden" : "block"}`}
				aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
			>
				<p className="text-gray-800 dark:text-gray-200">{answer}</p>
			</div>
		</div>
	);
};

const FaqTitle = () => {
	return (
		<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
			<h2 className="text-3xl md:text-4xl md:leading-tight dark:text-white">
				Your questions, answered
			</h2>
			<p className="mt-1 text-gray-600 dark:text-gray-400">
				Answers to the most frequently asked questions.
			</p>
		</div>
	);
};

const Faqs = () => {
	const faqData = [
		{
			question: "Where is Talent Vision School located?",
			answer:
				"Our school is located in the picturesque surroundings of Mamapar, P.O. Pichhaura, Distt. - Gorakhpur, approximately 10 kilometers from Gorakhpur city.",
			id: "one",
			isActive: true,
			isHidden: false,
		},
		{
			question: "What grades or classes do you offer?",
			answer:
				"We offer classes from Nursery to 8, covering primary to secondary education.",
			id: "two",
			isActive: false,
			isHidden: true,
		},
		{
			question: "How can I contact Talent Vision School?",
			answer:
				"You can reach us through our Contact Page, which provides contact information, including phone numbers and email addresses.",
			id: "three",
			isActive: false,
			isHidden: true,
		},
		{
			question: "How do I apply for admission to Talent Vision School?",
			answer:
				"You can find information on our admission process on our Admissions page. It includes details about application forms, deadlines, and requirements.",
			id: "four",
			isActive: false,
			isHidden: true,
		},
		{
			question: "Is transportation provided for students?",
			answer:
				"Yes, we offer transportation services for students. You can find details about routes, schedules, and fees on our Transportation page.",
			id: "five",
			isActive: false,
			isHidden: true,
		},
		{
			question:
				"How can I apply for a job or a teaching position at Talent Vision School?",
			answer:
				"Job and teaching position applications can be submitted through our Career Opportunities page, which provides details on current openings and the application process.",
			id: "six",
			isActive: false,
			isHidden: true,
		},
	];

	return (
		<>
			<div
				id="FAQ"
				className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 lg:px-8"
			>
				<FaqTitle />
				<div className="max-w-2xl mx-auto">
					<div className="hs-accordion-group">
						{faqData.map((faq) => (
							<FaqItem
								key={faq.id}
								question={faq.question}
								answer={faq.answer}
								id={faq.id}
								isActive={faq.isActive}
								isHidden={faq.isHidden}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Faqs;
