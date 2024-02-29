
import Link from "next/link";
const AboutUs = () => {
	return (
		<div>
			<section className="border-b-2 rounded-b-3xl">
				<div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="max-w-3xl dark:bg-black">
						<h1 className="tracking-tighter text-6xl p-3 text-gray-900 sm:text-8xl dark:text-white">
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
							<Link
								href="/about/introduction"
								className="mt-8 inline-block rounded border border-orange-600 bg-orange-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
