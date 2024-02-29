
import Content from "../components/PageContent";
import logo from "@public/images/logo.png";

const Introduction = () => {
	return (
		<section>
			<Content heroTitle="Introduction">
				<div className="space-y-6 md:space-y-8">
					<figure>
						<img
							className="w-3/5 h-3/5 object-cover rounded-xl mx-auto"
							src={logo.src}
							alt="School Logo"
						/>
						<figcaption className="mt-3 text-sm text-center text-gray-500">
							Our School Logo
						</figcaption>
					</figure>
					<h2 className="text-2xl font-bold md:text-3xl py-3 text-center ">
						School&apos;s History
					</h2>
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						Talent Vision School, located in the picturesque surroundings of
						Mamapar, P.O. Pichhaura, Distt. - Gorakhpur, is an esteemed English
						Medium School dedicated to fostering knowledge and character. It was
						established by the TALENT PROMOTIVE FOUNDATION, a registered society
						in Gorakhpur. This institution is conveniently situated along NH-29,
						near Sewain Bazar, approximately 10 kilometers away from bustling
						Gorakhpur city. The school boasts a serene and tranquil environment,
						providing students with a peaceful haven far removed from the
						city&apos;s hustle and bustle.
						<br />
						<br />
						The visionary behind this educational venture, Mr. G.P. Gunakar,
						nurtured a profound desire since his childhood to contribute to the
						nation&apos;s well-being through education. His journey began in
						2003 when he opened the doors of learning in a humble rented house
						in Chaktelhana village near Sewain Bazar. At that time, the school
						welcomed only 17 eager young minds. However, with unwavering
						determination, in 2006, the school relocated to its own
						purpose-built campus in Mamapar after overcoming numerous
						challenges. It&apos;s worth noting that the school follows the Neo
						Humanistic Education System, a pedagogical approach inspired by the
						teachings of Shri P.R. Sarkar, a revered educationist and
						philosopher in India.
					</p>

					{/* <figure>
						<Image
							src="/"
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
					</figure> */}

					<h2 className="text-3xl text-center font-bold md:text-3xl pt-10 sm:text-center">
						Our Driving Force
					</h2>

					<blockquote className="max-w-xl mx-auto text-center p-3 sm:px-7 py-4">
						<p className="text-2xl font-medium text-orange-800 sm:text-3xl md:leading-relaxed xl:text-2xl xl:leading-normal dark:text-gray-200">
							संगच्छध्वं संवदध्वं <br />
							सं वो मनांसि जानताम् <br />
							देवा भागं यथा पूर्वे <br />
							सञ्जानाना उपासते ||
						</p>

						<p className="text-xl font-medium text-zinc-900 sm:text-2xl leading- dark:text-gray-200 mt-8">
							May we march forward with a common goal.,
							<br />
							May we be open-minded and work together in harmony; <br />
							May we follow the example of our ancestors who achieved higher
							goals by virtue of being united.
						</p>
					</blockquote>

					<div className="space-y-5 mt-8">
						<h2 className="text-3xl font-bold md:text-3xl text-center pt-10">
							Our Educational Philosophy
						</h2>

						<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
							At Talent Vision School, we believe in a holistic approach to
							education. Beyond academics, we place a strong emphasis on the
							mental, intellectual, and spiritual growth of our students. Our
							educational philosophy recognizes the importance of developing
							well-rounded individuals who can thrive in a complex world.
						</p>
					</div>
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						Our mission is clear—to guide each student on their journey towards
						maturity, responsibility, discipline, and patriotism. We instill in
						them the values and knowledge necessary to make positive
						contributions to society. Through a rich curriculum and a supportive
						learning environment, we prepare our students to excel not only
						academically but also as compassionate and responsible citizens.
					</p>
				</div>
			</Content>
		</section>
	);
};

export default Introduction;
