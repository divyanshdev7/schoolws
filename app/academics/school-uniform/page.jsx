
import TabButton from "@app/about/components/TabButton";
import TabContent from "@app/about/components/TabContent";
import "/app/about/styles.css";

const funcName = () => {
	return (
		<section>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<div className="max-w-6xl text-center px-4 mx-auto">
					<h1 className="w-full block font-medium text-7xl sm:text-8xl md:text-8xl lg:text-9xl tracking-tighter">
						Page Title
					</h1>
				</div>
				<div className="max-w-6xl lg:py-6 mx-auto">
					<article className="mt-7 space-y-6 text-gray-600 text-xl font-satoshi">
						{/* Blog Article */}
						<div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-7xl">
								{/* Content */}
								<div className="space-y-6 md:space-y-8">
									<div className="space-y-3 mt-5">
										<h2 className="text-3xl font-bold md:text-3xl py-3 text-center ">
											Heading
										</h2>

										<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default funcName;
