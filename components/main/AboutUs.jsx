import Link from "next/link";
const AboutUs = () => {
	return (
		<div>
			<section className="border-b-2 rounded-b-3xl">
				<div className="mx-auto max-w-screen-lg px-6 mt-24 sm:px-6 lg:px-10">
					<div className="max-w-3xl dark:bg-black">
						<h1 className="tracking-tighter font-semibold text-7xl text-blue-900 sm:text-8xl px-3">
							About us
						</h1>
					</div>

					<div className="mt-8">
						<div className="lg:py-5">
							<article className="p-3 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								Talent Vision School is more than an institution; it&apos;s a
								community dedicated to shaping young minds. Our mission is
								clear: to inspire excellence in education. With unwavering
								commitment, we provide a nurturing and innovative learning
								environment that empowers students to thrive academically,
								socially, and personally. <br />
								<br /> Our experienced educators are passionate about fostering
								holistic growth. We believe in more than just academics; we
								encourage creativity, inquiry, and critical thinking. As a
								dynamic educational community, we aim to mold responsible,
								compassionate, and forward-thinking individuals. <br />
								<br /> At Talent Vision School, we understand that the journey
								of education extends beyond textbooks. It&apos;s about shaping
								character, instilling values, and nurturing lifelong learners.
								With a rich tapestry of academic programs, extracurricular
								activities, and support systems, we are dedicated to guiding
								students toward success. <br />
								<br /> We invite you to explore our world of knowledge, growth,
								and opportunities. Join us in the pursuit of excellence.
							</article>
							<div className="px-3 mb-2 text-center sm:text-right text-white">
								<Link
									href="/about/introduction"
									className="mt-8 inline-block rounded-3xl bg-gray-800 hover:bg-blue-900 px-7 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-0.5 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
