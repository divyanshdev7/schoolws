
import TabButton from "@app/about/components/TabButton";
import TabContent from "@app/about/components/TabContent";
import Content from "@app/about/components/PageContent";
import "/app/about/styles.css";

const Curriculum = () => {
	return (
		<Content heroTitle="Curriculum">
			<div className="space-y-6 md:space-y-8">
				<h2 className="text-2xl font-bold md:text-2xl py-3 text-center">
					Our Comprehensive Curriculum
				</h2>
				<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
					At Talent Vision School , we take immense pride in our commitment to
					providing an enriching and forward-thinking curriculum that empowers
					students for a lifelong journey of learning and growth. Our curriculum
					spans from Nursery to 8th grade, and it&apos;s thoughtfully designed
					to meet the diverse educational needs of our students. Let&apos;s
					delve into the key aspects that make our curriculum unique and
					impactful.
				</p>
				<div className="pt-8">
					<ol className="list-decimal pl-4 md:pl-8 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						<li className="mb-4">
							<h2 className="font-bold">
								Nursery to 5th Grade: **************
							</h2>
							<p>TO BE FILLED</p>
						</li>
						<li className="mb-4">
							<h2 className="font-bold">
								6th to 8th Grade: Following the NCERT Pattern
							</h2>
							<p>
								For our students in classes 6 to 8, we adhere to the trusted and
								nationally recognized NCERT (National Council of Educational
								Research and Training) pattern. This ensures that our students
								have a strong foundation in subjects such as Science,
								Mathematics, Social Science, and Languages, following the
								national curriculum standards. This approach prepares them for
								the rigors of higher education while also nurturing a deep
								understanding of key academic subjects.
							</p>
						</li>
						<li className="mb-4">
							<h2 className="font-bold">
								Alignment with NEP: Embracing Educational Reform
							</h2>
							<p>
								Our curriculum embraces the principles and vision set forth in
								India&apos;s National Education Policy (NEP). The NEP is a
								transformational blueprint for Indian education, emphasizing
								flexibility, skill development, and a multidisciplinary
								approach. We&apos;re committed to implementing the NEP&apos;s
								recommendations and ideals in our curriculum. This includes:
							</p>
							<ul className="mt-5 list-disc pl-4 md:pl-10 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								<li className="mb-4">
									<h2 className="font-bold">
										Emphasis on Multidisciplinary Learning:
									</h2>
									<p>
										We encourage students to explore diverse subjects and
										interests, fostering a well-rounded and holistic approach to
										education.
									</p>
								</li>
								<li className="mb-4">
									<h2 className="font-bold">Digital Literacy</h2>
									<p>
										We prioritize digital literacy, ensuring our students are
										equipped to thrive in the digital age.
									</p>
								</li>
								<li className="mb-4">
									<h2 className="font-bold">Experiential Learning</h2>
									<p>
										WHands-on learning experiences and practical applications
										are integrated to foster a deeper understanding of concepts.
									</p>
								</li>
								<li className="mb-4">
									<h2 className="font-bold">Holistic Development:</h2>
									<p>
										We focus on holistic development, emphasizing not just
										academic excellence but also values, life skills, and
										extracurricular activities.
									</p>
								</li>
							</ul>
						</li>
						<p className="text-lg sm:text-xl dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide bg-black p-8 text-gray-50 rounded-xl">
							At [Your School Name], we believe in preparing our students not
							only for academic excellence but also for life beyond the
							classroom. Our curriculum equips them with the skills and
							knowledge needed to navigate an ever-changing world. We&apos;re
							proud to be at the forefront of educational innovation, providing
							a learning environment that aligns with national educational
							reforms while nurturing the unique potential of every student.{" "}
							<br /> <br /> Join us on this exciting educational journey, where
							we foster a love for learning, creativity, and critical thinking
							in the spirit of the NEP&apos;s vision.
						</p>
					</ol>
				</div>
			</div>
		</Content>
	);
};

export default Curriculum;
