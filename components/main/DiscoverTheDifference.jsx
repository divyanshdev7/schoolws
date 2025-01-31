import React from "react";
import { motion } from "framer-motion";

const Discover = () => {
	return (
		<div className="bg-gradient-to-b from-white to-blue-50">
			<section className="border-b-2 rounded-b-3xl pb-20">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
					{/* Header Section */}
					<div className="text-center mb-16">
						<h2 className="tracking-tighter font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-900 mb-6">
							Discover the difference
						</h2>
						<p className="text-blue-600 text-lg md:text-xl max-w-2xl mx-auto">
							Experience excellence in education through our comprehensive
							approach to learning and development
						</p>
					</div>

					{/* Cards Grid */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
						{cardData.map((card, index) => (
							<div
								key={index}
								className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
							>
								{/* Image Container */}
								<div className="aspect-w-16 aspect-h-9 overflow-hidden">
									<img
										src={card.image}
										alt={card.heading}
										className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
									/>
								</div>

								{/* Content Container */}
								<div className="p-6 lg:p-8">
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-2xl font-semibold text-blue-900">
											{card.heading}
										</h3>
										<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
									</div>

									<p className="text-gray-600 leading-relaxed mb-4">
										{card.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{card.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

// Card data
const cardData = [
	{
		image:
			"https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		heading: "Academic Excellence",
		description:
			"Our rigorous curriculum and passionate educators drive students toward exceptional academic achievements, preparing them for future success in an ever-evolving world.",
		tags: ["Curriculum", "Achievement", "Excellence"],
	},
	{
		image:
			"https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		heading: "Holistic Education",
		description:
			"We nurture the whole student, focusing on their academic, social, and emotional development to create well-rounded individuals ready for life's challenges.",
		tags: ["Development", "Well-being", "Growth"],
	},
	{
		image:
			"https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		heading: "Strong Values",
		description:
			"Our school is guided by a set of strong values that shape our community and inspire character, fostering an environment of respect, integrity, and collaboration.",
		tags: ["Character", "Community", "Ethics"],
	},
	{
		image:
			"https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		heading: "Student Leadership",
		description:
			"Our programs empower students to develop leadership skills and become confident, responsible individuals who can make positive impacts in their communities.",
		tags: ["Leadership", "Confidence", "Impact"],
	},
];

export default Discover;
