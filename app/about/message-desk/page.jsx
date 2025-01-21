import "/app/about/styles.css";
import TabButton from "../components/TabButton";
import TabContent from "../components/TabContent";
import ContentTabs from "../components/PageContentTabs";
import Image from "next/image";
import director from "@public/images/director.jpeg";
import cofounder from "@public/images/cofounder.jpeg";
import principal from "@public/images/principal.jpg";

const MessageDesk = () => {
	return (
		<section>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<ContentTabs
					heroTitle="Message Desk"
					title="Meet our Administration"
				></ContentTabs>

				{/* Horizontal Tab  */}
				<div>
					{/* Tabs */}
					<div className="bg-white border-b border-gray-200 dark:border-gray-700 overflow-x-auto sticky top-[65px] lg:top-[85px] sm:z-[999] overscroll-x-none no-scrollbar">
						<nav
							className="flex justify-start xmd:justify-center space-x-8 snap-x"
							aria-label="Tabs"
							role="tablist"
						>
							<TabButton
								id="1"
								className="active"
								title="Director/Founder's Message"
							/>
							<TabButton id="2" title="Co-Founder's Message" />
							<TabButton id="3" title="Principal's Message" />
						</nav>
					</div>

					{/* Tab Content  */}
					<div className="mt-3 max-w-6xl lg:py-6 mx-auto">
						{/* Tab1  */}
						<div
							id="horizontal-alignment-1"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-1"
						>
							<figure>
								<Image
									src={`${director.src}`}
									className="rounded-2xl"
									alt="Picture of the author"
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
									width={500}
									height={300}
								/>
							</figure>
							<TabContent title="Director's Message">
								<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
									Dear Students, Parents, Guardians, and the entire Talent
									Vision School Family,
									<br />
									As I sit down to write this message, I'm filled with a sense
									of pride, joy, and gratitude. Our school's journey has been
									nothing short of incredible, and I'm honored to have shared it
									with all of you.
									<br />
									<br />
									Talent Vision School is more than just an institution – it's a
									community, a family, and a haven where young minds can grow,
									explore, and thrive. When I founded this school, my dream was
									to create a space where education would be a holistic
									experience, shaping not just minds, but also hearts.
									<br />
									<br />
									As you explore our website, I hope you'll catch a glimpse of
									the vibrant community we've built. Our online platform is
									designed to be a window into our world, a space where we can
									share our stories, celebrate our achievements, and connect
									with one another.
									<br />
									<br />
									But Talent Vision School is more than just a physical or
									virtual space – it's a philosophy, a way of life. We believe
									in nurturing curiosity, creativity, and critical thinking. We
									believe in empowering our students to be compassionate,
									empathetic, and courageous individuals who can make a positive
									impact in the world.
									<br />
									<br />
									Our faculty and staff are the backbone of our school, and I'm
									deeply grateful for their tireless efforts, their passion, and
									their commitment to excellence. They're not just educators –
									they're mentors, guides, and role models who inspire and
									support our students every step of the way.
									<br />
									<br />
									As we continue on this journey together, I invite you to
									explore our website, to learn more about our programs and
									initiatives, and to experience firsthand the warmth and
									inclusivity of our community.
									<br />
									<br />
									Thank you for being part of the Talent Vision School family.
									I'm excited to see what the future holds for us, and I'm
									deeply grateful for the trust you've placed in us.
									<br />
									<br />
								</p>
								<p className="text-lg font-bold sm:text-xl text-gray-800 dark:text-gray-200 sm:leading-loose sm:tracking-wide ">
									G.P.Gunakar <br />
									Founder, Talent Vision School
								</p>
							</TabContent>
						</div>

						{/* Tab2  */}
						<div
							id="horizontal-alignment-2"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-2"
						>
							<figure>
								<Image
									src={`${cofounder.src}`}
									className="rounded-2xl"
									alt="Picture of the author"
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
									width={500}
									height={300}
								/>
							</figure>
							<TabContent title="Co-Founder's Message">
								<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
									Dear Parents, Students, and Well-Wishers,
									<br />
									I warmly welcome you to Talent Vision School, a place where
									the seeds of knowledge and character are nurtured with love
									and care. While my husband, Mr. G.P. Gunakar, is the visionary
									founder of this institution, I am privileged to join him as
									the Co-Founder.
									<br />
									<br />
									Our journey at Talent Vision School began in 2003, a journey
									that has been nothing short of inspiring. My husband&apos;s
									lifelong commitment to teaching and his dream of serving our
									nation through education have been the driving forces behind
									this endeavor. Since its inception, our school has been a
									labor of love and a testament to the power of education.
									<br />
									<br />
									I have witnessed the unwavering dedication of our team in
									creating an environment that goes beyond traditional
									academics. Our aim is to mold students into not just
									knowledgeable individuals, but responsible, compassionate, and
									disciplined citizens.
									<br />
									<br />
									In the years since our humble beginnings, Talent Vision School
									has grown and adapted to the ever-changing educational
									landscape. We remain steadfast in our commitment to providing
									a vibrant and nurturing learning environment. It&apos;s a
									place where students strive for excellence, form lifelong
									bonds, and are encouraged to explore their unique talents.
									<br />
									<br />
									I must acknowledge the incredible journey we&apos;ve been on
									since the start. As the wife of the director and a staunch
									supporter of this institution, I am proud of the strides
									we&apos;ve made together.
									<br />
									<br />
									Our website is a testament to our collective efforts, and
									it&apos;s a platform where you can stay connected and
									informed. We are striving to provide a seamless experience for
									our students and their families.
									<br />
									<br />
									Since our school&apos;s inception, our commitment to
									excellence has remained unshaken. We are excited about the
									bright future that lies ahead, and we look forward to
									nurturing and guiding young minds with care and dedication.
									<br />
									<br />
									Thank you for being part of our Talent Vision School family.
									We invite you to join us on this incredible journey of growth,
									learning, and achievement.
									<br />
									<br />
								</p>
								<p className="text-lg font-bold sm:text-xl text-gray-800 dark:text-gray-200 sm:leading-loose sm:tracking-wide ">
									I.K. Rai
									<br />
									Co-Founder, Talent Vision School
								</p>
							</TabContent>
						</div>

						{/* Tab3  */}
						<div
							id="horizontal-alignment-3"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-3"
						>
							<figure>
								<Image
									src={`${principal.src}`}
									className="rounded-2xl"
									alt="Picture of the author"
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
									width={500}
									height={300}
								/>
							</figure>
							<TabContent title="Principal's Message">
								<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
									Dear Students, Parents, and Esteemed Faculty, <br />
									I am deeply honored to welcome you to Talent Vision School, a
									place where excellence in education meets a nurturing and
									supportive environment. As the Principal, I am not just an
									educator, but also a guide, mentor, and a lifelong learner.
									<br />
									<br />
									In my role, I am committed to fostering an atmosphere of
									academic rigor, personal growth, and character development. We
									believe that true education transcends textbooks, and it is
									about nurturing the holistic development of each student. Our
									mission is to create responsible, disciplined, and patriotic
									citizens who positively impact the world.
									<br />
									<br />
									My journey in the field of education has been a long and
									fulfilling one. Over the years, I&apos;ve had the privilege of
									witnessing the transformative power of education. It&apos;s a
									journey that has been guided by the belief that every student
									has unique talents waiting to be discovered and honed. It is
									my solemn promise to provide a platform for every student to
									shine and thrive.
									<br />
									<br />
									At Talent Vision School, our faculty is not just a group of
									teachers but mentors who are deeply invested in your
									child&apos;s future. We aim to provide an environment that
									encourages curiosity, critical thinking, and a thirst for
									knowledge. Our approach goes beyond textbooks and encourages
									students to apply what they&apos;ve learned to real-world
									scenarios.
									<br />
									<br />
									The school&apos;s website is a valuable resource that keeps us
									all connected. It&apos;s a platform where you can access
									important information, stay updated on school events, and
									engage with our vibrant school community. Our website reflects
									our commitment to providing a seamless and informative
									experience for our students and parents.
									<br />
									<br />
									As we embark on this journey together, I am excited about the
									possibilities that lie ahead. The path of education is one
									filled with exploration, growth, and boundless opportunities.
									I am here to support and guide each student on this remarkable
									journey.
									<br />
									<br />
									Thank you for choosing Talent Vision School, and I look
									forward to working with you to shape the future of our
									students.
									<br />
									<br />
									Warm regards,
									<br />
								</p>
								<p className="text-lg font-bold sm:text-xl text-gray-800 dark:text-gray-200 sm:leading-loose sm:tracking-wide ">
									Yogendra Yadav <br />
									Principal, Talent Vision School
								</p>
							</TabContent>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MessageDesk;
