const Header = () => (
	<header className="text-left">
		<h2 className="tracking-tighter font-semibold text-6xl text-blue-900 sm:text-8xl px-3">
			Beyond Academics
		</h2>
		<p className="py-8 p-3 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
			Discover the vibrant world of extra-curricular activities at our school,
			where students unlock their talents, pursue their passions, and celebrate
			their achievements.
			<br />
			At Talent Vision School, we understand that education is not confined to
			the classroom alone. It&apos;s about exploring the full spectrum of
			talents and interests that make each student unique. Our diverse range of
			extracurricular activities, from arts to sports, leadership to community
			service, provides a platform for every student to shine, learn, and grow.
		</p>
	</header>
);

// Image Grid Item Component
const ImageGridItem = ({ src }) => (
	<a className="group block relative overflow-hidden rounded-lg" href="#">
		<img
			className="w-full h-56 object-cover bg-gray-100 rounded-lg"
			src={src}
			alt="Project"
		/>
		<div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
			<div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
				<svg
					className="shrink-0 size-3"
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx={11} cy={11} r={8} />
					<path d="m21 21-4.3-4.3" />
				</svg>
				<span className="text-xs">View</span>
			</div>
		</div>
	</a>
);

// Image Grid Component
const ImageGrid = () => {
	const images = [
		"https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
			{images.map((src, index) => (
				<ImageGridItem key={index} src={src} />
			))}
		</div>
	);
};

const BeyondAcademics = () => {
	return (
		<div className="mb-5 mt-8">
			<section className="">
				<div className="max-w-screen-lg px-6 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
					<Header />
				</div>
			</section>
			<ImageGrid />
		</div>
	);
};

export default BeyondAcademics;
