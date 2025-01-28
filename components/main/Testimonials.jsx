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
		<section className="border-b-2 rounded-b-3xl">
			<div className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 lg:px-8">
				<header className="text-left">
					<h2 className="tracking-tighter p-2 text-6xl text-gray-900 sm:text-8xl">
						Parents Testimonials
					</h2>
					<p className="py-6 p-2 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
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
		<div className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 lg:px-8">
			<div className="my-10 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
				<Testimonial
					text="Choosing TVS for our child was the best decision we made. The
                    caring teachers, stimulating curriculum, and vibrant community
                    have truly enriched our child's life."
					name="Mr. XYZ"
					role="Parent"
				/>
				<Testimonial
					text="We couldn't be happier with [School Name]. Our children
                    love going to school here, and we've seen remarkable
                    growth in their academic and personal development."
					name="Mr. XYZ"
					role="Parent"
				/>
				<Testimonial
					text="The teachers at School Name are exceptional. Their dedication
                    and support have made a significant difference in our
                    child's education. We're proud to be part of this
                    school community."
					name="Mr. XYZ"
					role="Parent"
				/>
				<Testimonial
					text="As a parent, it's comforting to know that my child is not
                    only receiving a top-notch education but is also learning
                    important life values at School Name. It's truly a
                    nurturing environment."
					name="Mr. XYZ"
					role="Parent"
				/>
				<Testimonial
					text="Our children have thrived at School Name. The well-rounded
                    curriculum, focus on character, and numerous extracurricular
                    activities have helped them become confident learners."
					name="Mr. XYZ"
					role="Parent"
				/>
				<Testimonial
					text="Sending our kids to School Name was the right choice. The
                    school's commitment to academic excellence and the warm,
                    supportive atmosphere make it an exceptional place for
                    learning."
					name="Mr. XYZ"
					role="Parent"
				/>
			</div>
		</div>
	);
};

const Testimonial = ({ text, name, role }) => {
	return (
		<div className="mb-8 sm:break-inside-avoid">
			<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
				<p className="leading-relaxed text-gray-700">{text}</p>
			</blockquote>
			<div className="mt-4 flex items-center gap-4">
				<div className="text-sm">
					<p className="font-medium">{name}</p>
					<p className="mt-1">{role}</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
