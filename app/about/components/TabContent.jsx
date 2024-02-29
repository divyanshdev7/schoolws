

const TabContent = (props) => {
	return (
		<article className="space-y-6 text-gray-600 text-xl font-satoshi">
			<div className="max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto">
				<div className="max-w-7xl">
					<div className="space-y-6 md:space-y-8">
						<div className="space-y-3">
							<h2 className="text-3xl font-bold md:text-3xl py-3 text-center">
								{props.title}
							</h2>
							<article className="space-y-6 text-gray-600 text-md font-satoshi leading-relaxed">
								<div className="max-w-7xl pb-12 sm:px-6 lg:px-10 mx-auto">
									<div className="max-w-7xl">
										<div className="space-y-6 md:space-y-8">
											<div className="space-y-3">
												{props.children}
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default TabContent;
