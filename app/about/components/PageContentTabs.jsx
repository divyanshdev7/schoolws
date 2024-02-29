
const ContentTabs = (props) => {
	return (
		<>
			<div className="max-w-6xl text-center px-4 mx-auto">
				<h1 className="w-full block font-medium text-7xl sm:text-8xl md:text-8xl lg:text-9xl tracking-tighter">
					{/* props  */}
					{props.heroTitle}
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
									<h2 className="text-3xl font-bold md:text-3xl py-3 text-center">
										{props.title}
									</h2>
									{props.children}
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};

export default ContentTabs;
