"use client";
import { useParams } from "next/navigation";
import EventCards from "../components/SchoolEvents";
import PastPhotoCards from "../components/SchoolPastPhotos";
import UniformCards from "../components/SchoolUniform";
import InfraCards from "../components/SchoolInfra";

const CategoryPage = () => {
	const { category } = useParams();

	const categoryComponents = {
		"school-events": <EventCards />,
		"school-past": <PastPhotoCards />,
		"school-infra": <InfraCards />,
		"school-uniform": <UniformCards />,
	};

	return (
		<div className="max-w-6xl mx-auto px-4 py-10">
			{categoryComponents[category] || (
				<h1 className="text-center text-red-500">Category Not Found</h1>
			)}
		</div>
	);
};

export default CategoryPage;
