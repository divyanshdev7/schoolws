import React from "react";

const LatestEvent = (props) => {
	return (
		<>
			{/* Grid */}
				{/* Card */}
				<a className="group block border-2 p-3 rounded-xl" href="#">
					<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
						{props.title}
					</h3>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						{props.date}
					</p>
				</a>
				{/* End Card */}
			{/* End Grid */}
		</>
	);
};

export default LatestEvent;