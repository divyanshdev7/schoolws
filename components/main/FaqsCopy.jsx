import React from "react";
import FaqComp from "./components/faqComp";

const Faqs = () => {
	return (
		<>
			{/* FAQ */}
			<div id="FAQ" className="max-w-[85rem] px-6 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
					<FaqComp id="one" ques="answe" ans="answerrrrrrr" className="active" collapseClass=""/>
					<FaqComp id="two" ques="wdjewdk" ans="answerrrrrrr" className="" collapseClass=""/>
					<FaqComp id="three" ques="wdjewdk" ans="answerrrrrrr" className="" collapseClass=""/>
					<FaqComp id="four" ques="wdjewdk" ans="answerrrrrrr" className="" collapseClass=""/>
					<FaqComp id="five" ques="wdjewdk" ans="answerrrrrrr" className="" collapseClass=""/>
					{/* End Accordion */}
				</div>
			</div>

			{/* End FAQ */}
		</>
	);
};

export default Faqs;
