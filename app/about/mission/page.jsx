
import Content from "../components/PageContent";

const Mission = () => {
	return (
		<section>
			<Content heroTitle="Mission">
				<div className="space-y-6 md:space-y-8">
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide py-10">
						At Talent Vision School, our mission is more than just a statement;
						it&apos;s the heartbeat of our institution—a compass guiding us on
						our educational journey. Our core values form the foundation upon
						which we build a vibrant and nurturing school community. We are
						dedicated to fostering not only academic excellence but also
						character development, innovation, inclusivity, and a strong sense
						of responsibility. These values are not just words on paper; they
						are the principles that shape every facet of our educational
						philosophy and the experiences of our students. Let us delve deeper
						into our mission and values, which serve as the driving force behind
						our commitment to provide an exceptional education.
					</p>
					<div className="space-y-6 md:space-y-8">
						<div className="space-y-3 mt-5">
							<h2 className="text-3xl font-bold md:text-3xl py-3 text-center ">
								Mission Statement
							</h2>

							<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								Our mission is straightforward yet profound: to provide a
								nurturing educational environment that empowers students to
								excel academically, grow as individuals, and contribute
								positively to society. We are committed to:
							</p>

							<div className="py-14 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-9">
								<div className="mb-8 sm:break-inside-avoid">
									<div className="rounded-xl bg-gray-50 p-6 shadow">
										<h1 className="text-2xl mb-4 font-bold text-red-700 hover-ul-animation">
											Academic Excellence
										</h1>
										<p className="text-[0.96rem] leading-relaxed text-gray-700">
											We believe that knowledge is the cornerstone of personal
											and societal growth. We strive for academic excellence,
											providing rigorous programs that challenge and inspire
											students to reach their full potential.
										</p>
									</div>
								</div>

								<div className="mb-8 sm:break-inside-avoid">
									<div className="rounded-xl bg-gray-50 p-6 shadow">
										<h1 className="text-2xl mb-4 font-bold text-red-700 hover-ul-animation">
											Character Developement
										</h1>
										<p className="text-[0.96rem] leading-relaxed text-gray-700">
											We are dedicated to shaping well-rounded individuals. Our
											commitment to character education fosters values such as
											integrity, empathy, respect, and responsibility.
										</p>
									</div>
								</div>

								<div className="mb-8 sm:break-inside-avoid">
									<div className="rounded-xl bg-gray-50 p-6 shadow">
										<h1 className="text-2xl mb-4 font-bold text-red-700 hover-ul-animation">
											Innovation and Inquiry
										</h1>
										<p className="text-[0.96rem] leading-relaxed text-gray-700">
											We encourage curiosity and a spirit of inquiry. Our
											programs emphasize critical thinking, problem-solving, and
											creativity, preparing students to navigate an
											ever-evolving world.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-6 md:space-y-8">
						<div className="space-y-3 mt-5">
							<h2 className="text-3xl font-bold md:text-3xl py-3 text-center ">
								Core Values
							</h2>

							<p className="text-lg sm:text-xl dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide bg-black p-8 text-gray-50 rounded-xl">
								In the rural landscape of Talent Vision School, our core values
								are deeply rooted in simplicity and community spirit. Academic
								excellence, integrity, empathy, respect, innovation, and global
								awareness form the bedrock of our approach to education. These
								values reflect the essence of rural life, where neighbors
								support neighbors, and learning is a shared journey. We strive
								to instill these principles in our students, nurturing
								responsible, compassionate, and community-minded individuals who
								embrace rural values while reaching for a broader horizon.
							</p>
						</div>
					</div>
				</div>
			</Content>
		</section>
	);
};

export default Mission;
