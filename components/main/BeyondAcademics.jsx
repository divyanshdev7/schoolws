import Image from "next/image";
import girl from "@public/images/girl.jpg";
const BeyondAcademics = () => {
	return (
		<div>
			<section className="border-b-2 rounded-b-3xl">
				<div className="max-w-screen-lg px-6 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
					<header className="text-left">
						<h2 className="tracking-tighter p-3 text-6xl text-gray-900 sm:text-8xl">
							Beyond Academics
						</h2>

						<p className="py-8 p-3 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
							Discover the vibrant world of extra-curricular activities at our
							school, where students unlock their talents, pursue their
							passions, and celebrate their achievements.
							<br />
							At Talent Vision School, we understand that education is not
							confined to the classroom alone. It&apos;s about exploring the
							full spectrum of talents and interests that make each student
							unique. Our diverse range of extracurricular activities, from arts
							to sports, leadership to community service, provides a platform
							for every student to shine, learn, and grow.
						</p>
					</header>

					<>
						{/* Masonry Cards */}
						<div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
							{/* Grid */}
							<div className="grid sm:grid-cols-12 gap-6">
								<div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
									{/* Card */}
									<a
										className="group relative block rounded-xl overflow-hidden"
										href="#"
									>
										<div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
											<img
												className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
												src={girl.src}
											/>
										</div>
									</a>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
									{/* Card */}
									<a
										className="group relative block rounded-xl overflow-hidden"
										href="#"
									>
										<div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
											<img
												className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
												src={girl.src}
												alt="Image Description"
											/>
										</div>
									</a>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-span-12 md:col-span-4">
									{/* Card */}
									<a
										className="group relative block rounded-xl overflow-hidden"
										href="#"
									>
										<div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
											<img
												className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
												src={girl.src}
												alt="Image Description"
											/>
										</div>
									</a>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-span-12 sm:col-span-6 md:col-span-4">
									{/* Card */}
									<a
										className="group relative block rounded-xl overflow-hidden"
										href="#"
									>
										<div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
											<img
												className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
												src={girl.src}
												alt="Image Description"
											/>
										</div>
									</a>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-span-12 sm:col-span-6 md:col-span-4">
									{/* Card */}
									<a
										className="group relative block rounded-xl overflow-hidden"
										href="#"
									>
										<div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
											<img
												className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
												src={girl.src}
												alt="Image Description"
											/>
										</div>
									</a>
									{/* End Card */}
								</div>
								{/* End Col */}
							</div>
							{/* End Grid */}
						</div>
						{/* End Masonry Cards */}
					</>
				</div>
			</section>
		</div>
	);
};

export default BeyondAcademics;
