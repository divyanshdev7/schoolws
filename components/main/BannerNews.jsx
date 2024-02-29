
import Link from "next/link";
import LatestEvent from "./components/latestEvent";
const Banner = () => {
	return (
		<>
			{/* Card Blog */}
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* Title */}
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
						Latest Events
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Stay Updated with Our Latest Events
					</p>
				</div>
				{/* End Title */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<LatestEvent
						title="Creativity Board and Competition"
						date="May 20, 2023"
					/>
					<LatestEvent
						title="Inter House Sports Competition"
						date="May 20, 2021"
					/>
					<LatestEvent
						title="Inter House Quiz Competition"
						date="May 20, 2023"
					/>
				
				</div>
				<>
				
				</>
			</div>
			{/* End Card Blog */}
		</>
	);
};

export default Banner;
