const Card = ({ image, title, description, tags }) => {
	return (
		<a className="group flex flex-col h-[400px] focus:outline-none" href="#">
			<div className="aspect-w-16 aspect-h-12 h-[250px] overflow-hidden bg-gray-100 rounded-2xl">
				<img
					className="w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
					src={image}
					alt={title}
				/>
			</div>
			<div className="pt-4">
				<h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
					{title}
				</h3>
				<p className="mt-1 text-gray-600">{description}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};

const cardData = [
	{
		image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=560",
		title: "Annual Day Celebration",
		description:
			"A vibrant event showcasing student performances and achievements.",
		tags: ["Cultural Event", "Performances"],
	},
	{
		image: "https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?w=560",
		title: "Sports Day Highlights",
		description: "An action-packed day celebrating athletic talent.",
		tags: ["Sports", "Competition"],
	},
	{
		image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=560",
		title: "Art Exhibition",
		description: "A creative display of artwork by our talented students.",
		tags: ["Art", "Creativity"],
	},
	{
		image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=560",
		title: "Science Fair",
		description: "Innovative projects and experiments by young scientists.",
		tags: ["STEM", "Innovation"],
	},
	{
		image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=560",
		title: "Music Concert",
		description:
			"An evening filled with melodies performed by our school band.",
		tags: ["Music", "Performance"],
	},
	{
		image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=560",
		title: "Teacher's Day Celebration",
		description:
			"Honoring our educators with heartfelt performances and speeches.",
		tags: ["Gratitude", "Teachers"],
	},
	{
		image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=560",
		title: "Book Fair",
		description:
			"Encouraging the joy of reading with a wide selection of books.",
		tags: ["Literature", "Reading"],
	},
	{
		image: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=560",
		title: "Cultural Fest",
		description: "A celebration of traditions and diversity at our school.",
		tags: ["Culture", "Festivities"],
	},
	{
		image: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=560",
		title: "Eco Day Activities",
		description:
			"Promoting sustainability through hands-on eco-friendly activities.",
		tags: ["Environment", "Awareness"],
	},
];

const EventCards = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{cardData.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
	);
};

export default EventCards;
