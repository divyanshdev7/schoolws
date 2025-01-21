import React from "react";

const ComingSoon = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-center bg-black">
			{/* ========== MAIN CONTENT ========== */}
			<main
				id="content"
				className="relative max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto bg-black"
			>
				<div className="text-center py-8 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl text-white sm:text-6xl">
						Talent Vision Jr. High School
					</h1>
					<h2 className="mt-3 sm:mt-6 text-4xl font-bold text-white sm:text-6xl">
						<span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
							Coming Soon...
						</span>
					</h2>
					<p className="mt-6 text-lg text-white/50 sm:text-xl">
						We are currently working on something awesome. Stay tuned!
					</p>
				</div>
				<footer className="mt-24 inset-x-0 text-center py-5">
					<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
						<p className="text-sm text-white/50">© 2025 Divyansh Dev</p>
					</div>
				</footer>
			</main>
			{/* ========== END MAIN CONTENT ========== */}
			{/* ========== FOOTER ========== */}

			{/* ========== END FOOTER ========== */}
		</section>
	);
};

export default ComingSoon;
