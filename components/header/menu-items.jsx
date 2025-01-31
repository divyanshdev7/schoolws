const menuItems = [
	{
		navTitle: "About Us",
		items: [
			{ label: "Introduction", url: "/about/introduction" },
			{ label: "Message Desk", url: "/about/message-desk" },
			{ label: "Mission and Vision", url: "/about/mission" },
			// { label: "Salient Features", url: "/about/salient-features" },
			{ label: "School Policies", url: "/about/school-policies" },
		]
		
	},
	{
		navTitle: "Academics",
		items: [
			{ label: "Assessment", url: "/academics/assessment" },
			{ label: "Curriculum", url: "/academics/curriculum" },
			{ label: "Extra Curricular", url: "/academics/extra-curricular" },
		],
	},
	{
		navTitle: "Admissions",
		items: [
			{ label: "Procedure and Eligibility", url: "/admissions/admission-process" },
			{ label: "Fee Structure", url: "/admissions/fees" },
			// { label: "Scholarships", url: "/admissions/scholarships" },
		],
	},
	{
		navTitle: "Gallery",
		items: [
			{ label: "Events", url: "/gallery/school-events"},
			{ label: "Glimpse of the Past", url: "/gallery/school-past" },
			{ label: "Infrastructure", url: "/gallery/school-infra" },
			{ label: "School Uniform", url: "/gallery/school-uniform" },
		],
	},
	{
		navTitle: "Online",
		items: [
			{ label: "Latest Events", url: "/online/latest-event" },
			{ label: "Downloads", url: "/online/downloads" },
			{ label: "Work with Us", url: "/online/career" },
		],
	},
];

export default menuItems;
