import React from "react";

// Header Component
const SectionHeader = () => (
	<div>
		<span className="p-4 font-semibold">WHAT WE DO?</span>
		<span className="w-px flex-1 bg-gray-900/10"></span>
		<div className="max-w-5xl">
			<h1 className="tracking-tighter font-semibold text-6xl text-blue-900 sm:text-8xl px-3">
				Enriching Grade Levels.
			</h1>
		</div>
		<div className="lg:py-5 mt-4 lg:mt-0 p-4">
			<article className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
				<p>
					From Early Years to 8th Standard, we provide a nurturing environment
					where students thrive and become confident lifelong learners.
				</p>
			</article>
		</div>
	</div>
);

// Image Grid Item Component
const ImageGridItem = ({ src }) => (
	<a className="group block relative overflow-hidden rounded-lg" href="#">
		<img
			className="w-full size-40 object-cover bg-gray-100 rounded-lg"
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
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
			{images.map((src, index) => (
				<ImageGridItem key={index} src={src} />
			))}
		</div>
	);
};

// Program Feature Component
const ProgramFeature = ({ icon: Icon, title, description }) => (
	<div className="flex gap-x-5">
		<Icon className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" />
		<div className="grow">
			<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
				{title}
			</h3>
			<p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
		</div>
	</div>
);

// Icons (simplified for example)
const NurseryIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 16 16"
		{...props}
	>
		<path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
	</svg>
);

const PrimaryIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 16 16"
		{...props}
	>
		<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046z" />
	</svg>
);

const MiddleSchoolIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 16 16"
		{...props}
	>
		<path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
		<path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
	</svg>
);

const HolisticIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 16 16"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
		/>
	</svg>
);

// Educational Programs Component
const EducationalPrograms = () => (
	<div className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 lg:px-8">
		<div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
			<div className="lg:col-span-1">
				<h2 className="tracking-tighter font-semibold text-4xl text-blue-900 sm:text-5xl">
					Educational Programs that we offer
				</h2>
				<p className="mt-2 md:mt-4 text-lg sm:text-md text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
					From nurturing young minds in nursery to preparing students for the
					future in middle school, our diverse educational programs lay the
					foundation for lifelong learning.
				</p>
			</div>
			<div className="lg:col-span-2">
				<div className="grid sm:grid-cols-2 gap-10 md:gap-14">
					<ProgramFeature
						icon={NurseryIcon}
						title="Nursery and Kindergartens"
						description="Our nurturing nursery and kindergarten programs lay the foundation for lifelong learning, fostering essential skills and a love for exploration."
					/>
					<ProgramFeature
						icon={PrimaryIcon}
						title="Primary Education (1st to 5th Grade)"
						description="In the primary grades, we focus on core subjects, nurturing critical thinking and problem-solving skills to build a strong academic foundation."
					/>
					<ProgramFeature
						icon={MiddleSchoolIcon}
						title="Middle School Curriculum (6th to 8th Grade)"
						description="Our middle school program prepares students for future success by offering a diverse curriculum, encouraging independent learning and leadership."
					/>
					<ProgramFeature
						icon={HolisticIcon}
						title="Holistic Learning"
						description="We believe in holistic education, emphasizing character development, ethics, and life skills alongside academics."
					/>
				</div>
			</div>
		</div>
	</div>
);

// Main GradeLevels Component
const GradeLevels = () => {
	return (
		<div>
			<section className="leading-relaxed">
				<div className="mx-auto max-w-screen-lg px-6 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col">
					<SectionHeader />
					<ImageGrid />
					<EducationalPrograms />
				</div>
			</section>
		</div>
	);
};

export default GradeLevels;
