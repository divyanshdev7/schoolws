"use client";
import Link from "next/link";

const GalleryGrid = ({ data, route }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
			{data.map((item, index) => (
				<Link
					key={item.slug || `item-${index}`}
					href={`/gallery/${route}/${item.slug}`}
					className="group block border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
				>
					<article>
						<img
							className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
							src={item.image}
							alt={item.title}
						/>
						<div className="p-4">
							<h3 className="text-lg font-bold group-hover:underline">
								{item.title}
							</h3>
							<p className="text-gray-600">{item.description}</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{item.tags.map((tag, tagIndex) => (
									<span
										key={`${item.slug || `item-${index}`}-tag-${tagIndex}`}
										className="py-1.5 px-3 bg-gray-100 text-gray-600 text-sm rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				</Link>
			))}
		</div>
	);
};

export default GalleryGrid;
