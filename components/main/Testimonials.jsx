const Testimonials = () => {
	return (
		<div>
			<SectionHeader />
			<TestimonialsList />
		</div>
	);
};

const SectionHeader = () => {
	return (
		<section className="">
			<div className="mt-24 mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-3">
				<header className="text-left">
					<h2 className="tracking-tighter font-semibold text-6xl text-blue-900 sm:text-8xl px-3">
						Parents Testimonials
					</h2>
					<p className="py-6 p-2 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide px-3">
						Read heartfelt testimonials from our proud parents, sharing their
						experiences and appreciation for the exceptional education and
						nurturing environment provided by our school.
					</p>
				</header>
			</div>
		</section>
	);
};

const TestimonialsList = () => {
	return (
		<div className="md:max-w-[90%] rounded-3xl bg-gray-900 mx-auto px-14 md:px-24 py-8">
			<div className="my-10 [column-fill:_balance] sm:columns-2 sm:gap-8 lg:columns-3 lg:gap-10">
				<Testimonial
					text="Choosing Talent Vision School for our child was the best decision we made. The caring teachers, stimulating curriculum, and vibrant community have truly enriched our child's life."
					name="Mr. John Doe"
					role="Parent"
				/>
				<Testimonial
					text="We couldn't be happier with Talent Vision School. Our children love going to school here, and we've seen remarkable growth in their academic and personal development."
					name="Mrs. Jane Smith"
					role="Parent"
				/>
				<Testimonial
					text="The teachers at Talent Vision School are exceptional. Their dedication and support have made a significant difference in our child's education. We're proud to be part of this school community."
					name="Mr. Robert Brown"
					role="Parent"
				/>
				<Testimonial
					text="As a parent, it's comforting to know that my child is not only receiving a top-notch education but is also learning important life values at Talent Vision School. It's truly a nurturing environment."
					name="Mrs. Emily Johnson"
					role="Parent"
				/>
				<Testimonial
					text="Our children have thrived at Talent Vision School. The well-rounded curriculum, focus on character, and numerous extracurricular activities have helped them become confident learners."
					name="Mr. Michael Davis"
					role="Parent"
				/>
				<Testimonial
					text="Sending our kids to Talent Vision School was the right choice. The school's commitment to academic excellence and the warm, supportive atmosphere make it an exceptional place for learning."
					name="Mrs. Sarah Wilson"
					role="Parent"
				/>
			</div>
		</div>
	);
};

const Testimonial = ({ text, name, role }) => {
	return (
		<div className="mb-8 py-8 sm:break-inside-avoid transform transition duration-300 hover:scale-105">
			<blockquote className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg relative">
				{/* Quotation Mark */}
				<div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
					<svg
						className="w-4 h-4 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
					</svg>
				</div>

				{/* Testimonial Text */}
				<p className="leading-relaxed text-gray-300 font-medium tracking-wide mb-4">
					{text}
				</p>

				{/* Border Accent */}
				<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-b-xl"></div>
			</blockquote>

			{/* Profile Section */}
			<div className="mt-6 flex items-center gap-4 px-2">
				<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
					{name.charAt(0)}
				</div>
				<div className="text-sm">
					<p className="font-semibold text-gray-200">{name}</p>
					<p className="text-indigo-400 font-medium">{role}</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
