
import TabButton from "../components/TabButton";
import TabContent from "../components/TabContent";
import "/app/about/styles.css";
import ContentTabs from "../components/PageContentTabs";

const SchoolPolicy = () => {
	return (
		<section>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<ContentTabs
					heroTitle="School Policies"
					title="Welcome to our School Policies"
				>
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						Explore our guidelines and expectations for a harmonious and
						productive learning environment at Talent Vision School. Our
						policies are designed to ensure the well-being of our entire school
						community. Please take a moment to familiarize yourself with these
						essential guidelines.
					</p>
				</ContentTabs>
				{/* Horizontal Tab  */}
				<div>
					{/* Tabs */}
					<div className="bg-white border-b border-gray-200 dark:border-gray-700 overflow-x-auto sticky top-[65px] lg:top-[85px] sm:z-[999] overscroll-x-none no-scrollbar">
						<nav
							className="flex justify-start md:justify-center space-x-6 snap-x"
							aria-label="Tabs"
							role="tablist"
						>
							<TabButton id="1" className="active" title="Code of Conduct" />
							<TabButton id="2" title="Examination and Promotion" />
							<TabButton id="3" title="Attendance and Leave" />
							<TabButton id="4" title="Special Instructions to Students" />
							<TabButton id="5" title="Recommendation to the Parents" />
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
							<TabContent title="Code of Conduct">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										Students shall maintain a high standard of good manners and
										general behaviour.
									</li>
									<li className="mb-3">
										They should be polite and well-behaved within the school
										premises and outside, and nurture qualities of respect for
										elders and teachers, honesty and truthfulness, at all times
										and places.
									</li>
									<li className="mb-3">
										Students are exhorted to be orderly, clean in person and
										mind, neatly dressed, well-behaved at all times, and
										cooperate in maintaining the cleanliness of the School,
										classroom and campus.
									</li>
									<li className="mb-3">
										Absolute silence must be observed during the general
										assembly, and moving to the classroom and inside the
										classroom, even in the absence of the teachers. During the
										recess and intervals students shall not behave viciously or
										riotously.
									</li>
									<li className="mb-3">
										In the absence of the teachers the Monitor assumes
										responsibility for maintenance or order and discipline in
										the class, a duty which he/she must fulfill loyally and
										impartially.
									</li>
									<li className="mb-3">
										Students who are given some responsibility should undertake
										it dutifully and impartially in accordance with the
										direction given by the Principal or the teacher deputed by
										him.
									</li>
									<li className="mb-3">
										Students should not write, carve or scratch on the school
										walls or deface the school furniture.
									</li>
									<li className="mb-3">
										Respect for one&apos;s property and school property as well
										as those belonging to others is mark of a responsible
										student. Damage of any kind to the school property even by
										accident will be made good from the student.
									</li>
									<li className="mb-3">
										Students must always speak in English in the school premises
										and maintain a high standard in their conversation.
									</li>
									<li className="mb-3">
										All students must be in possession of a copy of this School
										Handbook and should bring it daily to the school.
									</li>
									<li className="mb-3">
										Each student is responsible for his/her things, and the
										school will not be responsible for the loss of books, money
										or any other article of the student. It is advised that
										money or other valuable things are not brought to the
										school.
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
							<TabContent title="Examination and Promotion">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										The Annual Promotions are decided through a system of
										continuous assessment throughout the year. Marks obtained in
										the annual examination alone will not determine the
										promotion of the student. The total marks are divided among
										class tests, Regular class works and the Semestral
										Examinations.
									</li>
									<li className="mb-3">
										If a student does not show steady and consistent progress in
										studies, he/she is not liable to be promoted.
									</li>
									<li className="mb-3">
										There will be no re-examination or examination out of
										schedule.
									</li>
									<li className="mb-3">
										For being promoted a student must secure a minimum of 40%
										marks in every subject and 50% in aggregate.
									</li>
									<li className="mb-3">
										No leave except on medical grounds will be sanctioned during
										the examinations. Medical leave is to be applied for when
										the leave is taken, supported by a Medical Certificate.
										However, it is not substitute for examination. The overall
										performance of the student will be considered.
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
							<TabContent title="Attendance and Leave">
								<ul className="list-disc pl-4 md:pl-8">
									<li className="mb-3">
										A minimum of 75% of attendance of the working days will only
										qualify a student for promotion.
									</li>
									<li className="mb-3">
										Attendance is compulsory on National Holidays such as
										Independance Day, Gandhi Jayanti and Republic Day. Absence
										on these days is punishable. In case of sickness, it must be
										reported to the school supported by Medical Certificate.
									</li>
									<li className="mb-3">
										During class hours students will not be allowed to leave the
										school premises except in unforeseen, emergent cases, In
										such cases the parent/guardian of the student has to request
										personally or give proper authorization to the one sent for
										the purpose; however the decision remains at the discretion
										of the Principal.
									</li>
									<li className="mb-3">
										Leave of absence for the whole day or part there of will not
										be granted except on previous written application by the
										parent/guardian.
									</li>
									<li className="mb-3">
										Frequent Leave and repeated absence for festivals, wedding,
										trip etc. Will render a student liable for removal from the
										roll.
									</li>
									<li className="mb-3">
										Medical leave for three days and more should invariably
										accompanied by a medical certificate.
									</li>
									<li className="mb-3">
										Leave application will invariably bear the signature of
										parent/guardian. Failure to submit application for leave
										will render a student liable to be sent home.
									</li>
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

export default SchoolPolicy;
