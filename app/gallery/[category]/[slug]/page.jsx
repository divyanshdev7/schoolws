"use client";
import Link from "next/link";
import eventData from "@app/data/events";
import pastPhotosData from "@app/data/pastPhotos";
import uniformsData from "@app/data/schoolUniform";
import infraData from "@app/data/schoolInfra";

import App from "../../lightbox/App"
import "../../lightbox/index.css";

const DetailPage = ({ params }) => {
	const { category, slug } = params;

	// Select the correct dataset based on category
	const dataMap = {
		"school-events": eventData,
		"school-infra": infraData,
		"school-past": pastPhotosData,
		"school-uniform": uniformsData,
	};
	const item = dataMap[category]?.find((e) => e.slug === slug);

	if (!item) {
		return <h1 className="text-center text-red-500 mt-10">Item Not Found</h1>;
	}

	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<Link href={`/gallery/${category}`} className="text-blue-500">
				&larr; Back to {category.replace("-", " ")}
			</Link>
			<h1 className="text-4xl font-bold mt-4">{item.title}</h1>
			<p className="text-gray-600">{item.description}</p>

			<div className="mt-3 flex flex-wrap gap-2">
				{item.tags.map((tag, index) => (
					<span
						key={index}
						className="py-1.5 px-3 bg-gray-200 text-gray-600 text-sm rounded-xl"
					>
						{tag}
					</span>
				))}
			</div>
			<App />
		</div>
	);
};

export default DetailPage;
