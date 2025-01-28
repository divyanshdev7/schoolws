
const Content = (props) => {
	return (
		<>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<div className="max-w-6xl text-center mx-auto">
					<h1 className="font-medium text-7xl sm:text-9xl tracking-tighter">
						{props.heroTitle}
					</h1>
				</div>
				{/* main parent  */}
				<div className="max-w-6xl lg:py-6 mx-auto">
					{/*first child = title + contents */}
					<article className="mt-7 space-y-6 text-gray-600 text-xl font-satoshi">
						<div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
							{/* Wrapper of all content  */}
							<div className="max-w-7xl">
								{/* Content */}
								{props.children}
								{/* End Content */}
							</div>
						</div>
						{/* End Blog Article */}
					</article>
				</div>
			</div>
		</>
	);
};

export default Content;
