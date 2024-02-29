
import TabButton from "@app/about/components/TabButton";
import TabContent from "@app/about/components/TabContent";
import "/app/about/styles.css";
import ContentTabs from "@app/about/components/PageContentTabs";


const ExtraCurricular = () => {
	return (
		<section>
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<ContentTabs
					heroTitle="Extra Curricular"
					title="Exploring Passions Beyond the Classroom"
				>
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						At [Your School Name], we firmly believe that a well-rounded
						education extends beyond textbooks and classrooms. It encompasses a
						vibrant world of extracurricular activities that enable students to
						explore their passions, develop new skills, and build lasting
						memories.
						<br />
						Our extracurricular programs are designed to cater to a diverse
						range of interests and talents. From sports to arts, music to
						debating, and community service to technology, there&apos;s
						something for everyone.
					</p>
				</ContentTabs>
				{/* Horizontal Tab  */}
				<div>
					{/* Tabs */}
					{/* <div className="bg-white border-b border-gray-200 dark:border-gray-700 overflow-x-auto sticky top-[65px] lg:top-[85px] sm:z-[999] overscroll-x-none no-scrollbar">
						<nav
							className="flex justify-start md:justify-center space-x-6 snap-x"
							aria-label="Tabs"
							role="tablist"
						>
							<TabButton id="1" className="active" title="Sports" />
							<TabButton id="2" title="Arts and Crafts" />
							<TabButton id="3" title="Debating and Public Speaking" />
							<TabButton id="4" title="Dance" />
							<TabButton id="5" title="Leadership" />
						</nav>
					</div> */}

					{/* Tab Content  */}
					<div className="mt-3 max-w-6xl lg:py-6 mx-auto">
						{/* Tab1  */}
						<div
							id="horizontal-alignment-1"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-1"
						>
							<TabContent title="">
								Grid for Extra Currricular Activities.
							</TabContent>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExtraCurricular;
