// HomePage / Landing Page
import ComingSoon from "./comingSoon";
import Hero from "@components/header/hero";
import Carousal from "@components/main/Carousal";
import Banner from "@components/main/BannerNews";
import Discover from "@components/main/DiscoverTheDifference";
import AboutUs from "@components/main/AboutUs";
import GradeLevels from "@components/main/EnrichingGradeLevels";
import Enroll from "@components/main/Enroll_CTA";
import BeyondAcademics from "@components/main/BeyondAcademics";
import Testimonials from "@components/main/Testimonials";
import Faqs from "@components/main/Faqs";

export default function Home() {
	return (
		<div>
			<ComingSoon />
			{/* <Hero />
			<Carousal /> */}
			{/* <Banner /> */}
			{/* <Discover />
			<AboutUs />
			<GradeLevels />
			<Enroll />
			<BeyondAcademics />
			<Testimonials />
			<Faqs /> */}
		</div>
	);
}
