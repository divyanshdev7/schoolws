// Desc: Quote component

import SectionCards from "./components/discover";
import Image from "next/image";
import girl from '@public/images/girl.jpg'
// mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8
const Discover = () => {
	return (
		<div>
			<section>
				<div className="mx-auto max-w-screen-lg px-7 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="">
						<h2 className="tracking-tighter text-6xl  text-gray-900 sm:text-8xl">
							Discover the difference
						</h2>
					</div>
					{/* Card Blog */}
					<div className="max-w-[85rem] py-10 sm:px-6 lg:px-2 lg:py-14 mx-auto">
						{/* Grid */}
						<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
							{/* Card */}
							<SectionCards
								url={`${girl.src}`}
								heading="Academic Excellence"
								description="Our rigorous curriculum and passionate educators drive students toward exceptional academic achievements."
							/>

							<SectionCards
								url={`${girl.src}`}
								heading="Holistic Education"
								description="We nurture the whole student, focusing on their academic, social, and emotional development."
							/>

							<SectionCards
								url={`${girl.src}`}
								heading="Strong Values"
								description="Our school is guided by a set of strong values that shape our community and inspire character."
							/>

							<SectionCards
								url={`${girl.src}`}
								heading="Student Leadership"
								description="Our programs empower students to develop leadership skills and become confident, responsible individuals."
							/>
							{/* End Card */}
						</div>
						{/* End Grid */}
					</div>
					{/* End Card Blog */}
				</div>
			</section>
		</div>
	);
};

export default Discover;
