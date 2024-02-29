
import TabButton from "@app/about/components/TabButton";
import TabContent from "@app/about/components/TabContent";
import "/app/about/styles.css";

const Admission = () => {
	return (
		<section>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<div className="max-w-6xl text-center px-4 mx-auto">
					<h1 className="w-full block font-medium text-7xl sm:text-8xl md:text-8xl lg:text-9xl tracking-tighter">
						Admissions
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
											Start your journey with us
										</h2>

										<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
											Welcome to the admissions section of Talent Vision School.
											We are delighted that you&apos;re considering our school
											for your child&apos;s educational journey. Our goal is to
											make the admission process as straightforward and
											transparent as possible. Here&apos;s what you need to
											know:
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
				{/* Horizontal Tab  */}
				<div>
					{/* Tabs */}
					<div className="bg-white border-b border-gray-200 dark:border-gray-700 overflow-x-auto sticky top-[65px] lg:top-[85px] sm:z-[999] overscroll-x-none no-scrollbar">
						<nav
							className="flex justify-start md:justify-center space-x-6 snap-x"
							aria-label="Tabs"
							role="tablist"
						>
							<TabButton
								id="1"
								className="active"
								title="General Information"
							/>
							<TabButton id="2" title="Admission Procedure" />
							<TabButton id="3" title="Eligibility Criteria" />
						</nav>
					</div>

					{/* Tab Content  */}
					<div className="mt-3 max-w-6xl lg:py-6 mx-auto">
						{/* Tab1  */}
						<div
							id="horizontal-alignment-1"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-1"
						>
							<TabContent title="General Information">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										Our admission process involves a comprehensive interview
										assessment, which serves as a primary evaluation method.
										This interview helps us understand the student&apos;s
										aptitude and readiness for admission.
									</li>
									<li className="mb-3">
										Admission to Talent Vision School is based on aptitude for
										the class for which admission is sought. This condition
										reflects our commitment to nurturing individual talents and
										ensuring that students are well-suited for their chosen
										grade.
									</li>
									<li className="mb-3">
										At Talent Vision School, we do not allow students to jump to
										a higher class either after the session has commenced or
										during the middle of the academic year. This policy is in
										place to maintain educational continuity and quality for all
										students.
									</li>

									<li className="mb-3">
										We welcome students from diverse backgrounds and encourage a
										sense of belonging and community within our school.
									</li>
									<li className="mb-3">
										The admission window at Talent Vision School is open from
										April 1st to July 31st, providing a reasonable timeframe for
										applicants to complete the process.
									</li>
								</ul>
							</TabContent>
						</div>

						{/* Tab2  */}
						<div
							id="horizontal-alignment-2"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-2"
						>
							<TabContent title="Admission Procedure">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										To begin the admission process, interested students and
										their families are required to visit our school in person to
										collect and submit the admission application form. This step
										ensures that we have direct contact with prospective
										students and their parents or guardians.
									</li>

									<li className="mb-3">
										For new admissions, you must provide essential documents,
										including a Transfer Certificate and Character Certificate
										from the student&apos;s previous school. Additionally, a
										copy of the Mark List from the qualifying examination is
										necessary.
									</li>

									<li className="mb-3">
										For admission to classes such as LKG, UKG, and I, an
										authentic Birth Certificate issued by competent authorities
										such as Nagar Nigam, Nagar Palika, or Panchayat is
										mandatory.
									</li>

									<li className="mb-3">
										Once the date of birth is recorded, it cannot be altered
										under any circumstances. It is essential to ensure accuracy
										in this information.
									</li>

									<li className="mb-3">
										When seeking admission, the student&apos;s parents or
										guardians must be present and sign the admission form. This
										personal involvement is important in the admission process.
									</li>

									<li className="mb-3">
										Be prepared to make the first instalment of the fees at the
										School Office during the admission process.
									</li>
									<li className="mb-3">
										Certificate and Reports: Prepare the necessary documents for
										admission, which include:
										<ul className="list-disc pl-4 md:pl-8">
											<li className="mb-3">
												Transfer Certificate from the student&apos;s previous
												school.
											</li>
											<li className="mb-3">
												A Xerox copy of the Mark List (Report Card), along with
												the original.
											</li>
											<li className="mb-3">Two passport-sized photographs.</li>
										</ul>
									</li>
								</ul>
							</TabContent>
						</div>

						{/* Tab3  */}
						<div
							id="horizontal-alignment-3"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-3"
						>
							<TabContent title="Eligibility Criteria">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										The age of the student is a crucial factor. Different
										classes may have varying age requirements, but in general,
										for admission to kindergarten (LKG/UKG), students are
										usually around 3-4 years old, and for higher classes, the
										minimum age requirement is stipulated.
									</li>
									<li className="mb-3">
										For admission to classes other than the initial ones
										(LKG/UKG), students are generally required to have completed
										the previous class, along with the relevant documents as
										proof of academic background.
									</li>
									{/* <li className="mb-3"></li>
									<li className="mb-3"></li>
									<li className="mb-3"></li> */}
								</ul>
							</TabContent>
						</div>

						{/* Tab4  */}
						<div
							id="horizontal-alignment-4"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-4"
						>
							<TabContent title="Special Instructions to Students">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										In your dress and behaviour keep a sense of self-respect.
										Right behaviour is the expression of fine character and a
										good personality.
									</li>
									<li className="mb-3">
										Be simple in your ways and words. Avoid using indecent
										language.
									</li>
									<li className="mb-3">
										COURTESY BEGETS COURTESY. Make use of words
										&apos;please&apos; and thanks&apos;. If you have to
										criticize, do not be destructive, but be constructive.
									</li>
									<li className="mb-3">
										In all your dealings with others be polite and obliging.
										Always try to be a good companion to help others and hurt
										nobody.
									</li>
									<li className="mb-3">
										Respect your elders and teachers, whenever you meet them,
										greet them with respect and love.
									</li>
									<li className="mb-3">
										Be polite and helpful to the strangers coming to the school.
									</li>
									<li className="mb-3">
										Before and after every class stand up for prayer.
									</li>
									<li className="mb-3">
										Every student is supposed to take part and co-operate in the
										various school activities such as cultural programmes,
										sports and games, drill etc. No exemption shall be given to
										the students from the school programmes and functions.
									</li>
									<li className="mb-3">
										Students are exhorted to make use of the Library and Reading
										Room; Books and Periodicals must be carefully handled and
										kept neat and tidy.
									</li>
									<li className="mb-3">
										English is the medium of communication in the school. Speak
										only in English in the School Campus.
									</li>
								</ul>
							</TabContent>
						</div>

						{/* Tab5  */}
						<div
							id="horizontal-alignment-5"
							className="hidden"
							role="tabpanel"
							aria-labelledby="horizontal-alignment-item-5"
						>
							<TabContent title="Recommendation to the Parents ">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										Parents are requested to co-operate with the school by
										ensuring that the children observe punctuality, regularity
										and discipline, do their works regularly, and take active
										part in the various programmes in the school.
									</li>
									<li className="mb-3">
										PRIVATE TUITION is not encouraged. Instead, parents are
										requested to give personal attention and ask their children
										to clarify their problems with their teachers in the school
										itself. Parents are reminded not to engage teachers of this
										school for private tuition. It is a punishable offence.
									</li>
									<li className="mb-3">
										Parents should occasionally check the copies and Handbook of
										the children, and sign the comments given by the teachers.
										They are welcome to give their suggestions and opinions.
									</li>
									<li className="mb-3">
										Parents must by all means attend the PARENT-TEACHER meeting
										to discuss with the teachers regarding the study of their
										children and to have a clear knowledge of their progress.
									</li>
									<li className="mb-3">
										Parents are not allowed to interview the teachers in the
										classroom or in the staff room without the permission of the
										Principal. Those who wish to seek any information or any
										suggestion may do it during the Parent- Jon Teacher Meeting.
									</li>
									<li className="mb-3">
										Parents/guardians must not go to the classrooms during the
										school hours. In case of any necessity they may contact at
										the office.
									</li>
									<li className="mb-3">
										When a student is likely to be absent due to illness for a
										long period, the Principal must be informed through an
										application for leave supported by Medical Certificate
										within a week; failure do so will result in the child&apos;s
										name being removed from the school roll.
									</li>
									<li className="mb-3">
										The Principal or teacher may punish a student for habitual
										idleness, disobedience or misconduct, indiscipline etc. by
										suspension or removal from the class.
									</li>
									<li className="mb-3">
										Criticizing the teachers in the presence of the children
										must be avoided. In cases of any legitimate complaints the
										Principal must be contacted.
									</li>
									<li className="mb-3">
										Children must be trained in self-help by encouraging them to
										work and study. They should be taught to keep their rooms
										neat and tidy, polish their own shoes, carry their bags etc.
										The development of such habits in early life will inculcate
										in them the dignity of work, a fundamental necessity for a
										successful career.
									</li>
									<li className="mb-3">
										The school is not responsible for the safety of the student
										after the school hours. Necessary arrangement must therefore
										be made to take the children home after their classes.
									</li>
								</ul>
							</TabContent>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admission;
