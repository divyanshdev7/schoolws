"use client";
import Link from "next/link";
import eventData from "@app/data/events";
import App from "../gallery/lightbox/App";
import "../gallery/lightbox/index.css"

const EventDetail = ({ params }) => {
	const { eventSlug } = params;

	const event = eventData.find((e) => e.slug === eventSlug);

	if (!event) {
		return <h1 className="text-center text-red-500 mt-10">Event Not Found</h1>;
	}

	return (
		<>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<Link href="/gallery/school-events" className="text-blue-500">
					&larr; Back to Events
				</Link>
				<h1 className="text-4xl font-bold mt-4">{event.title}</h1>

				<p className="text-gray-600">{event.description}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{event.tags.map((tag, index) => (
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
		</>
	);
};

export default EventDetail;
