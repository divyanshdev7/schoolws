// HomePage / Landing Page

import Hero from "@components/header/hero";
import Carousal from "@components/main/Carousal";
import Banner from "@components/main/BannerNews";
import Discover from "@components/main/DiscoverWorld";
import AboutUs from "@components/main/About";
import GradeLevels from "@components/main/GradeLevels";
import Enroll from "@components/main/Enroll";
import BeyondAcademics from "@components/main/BeyondAcademics";
import Testimonials from "@components/main/Testimonials";
import Faqs from "@components/main/Faqs";

export default function Home() {
	return (
		<div>
			<Hero />
			<Carousal />
			{/* <Banner /> */}
			<Discover />
			<AboutUs />
			<GradeLevels />
			<Enroll />
			<BeyondAcademics />
			<Testimonials />
			<Faqs />
		</div>
	);
}
