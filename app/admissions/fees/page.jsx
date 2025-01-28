
import Content from "@app/about/components/PageContent";
import TableComponent from "./table-content";
import TabContent from "@app/about/components/PageContentTabs";
import "/app/about/styles.css";

const FeeStructure = () => {
	return (
		<Content heroTitle="Fee Structure">
			<div className="space-y-6 md:space-y-8">
				<h2 className="text-2xl font-bold md:text-3xl py-3 text-center ">
					Introduction to Fee Structure
				</h2>

				<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide text-center">
					At Talent Vision School , we believe in providing high-quality
					education while maintaining transparency in our fee structure. Our fee
					system is designed to cover the cost of educational resources,
					infrastructure development, and extracurricular activities to ensure a
					well-rounded educational experience for our students.
				</p>

				<div className="pt-10 flex flex-col">
					<div className="overflow-x-auto">
						<div className="p-1.5 min-w-full inline-block align-middle">
							<div className="border-2 border-gray-500 rounded-lg overflow-hidden dark:border-gray-700">
								<table className="min-w-full divide-y divide-gray-500 dark:divide-gray-700">
									<thead>
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
											>
												Class
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
											>
												Admission Fees
											</th>
											<th
												scope="col"
												className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase"
											>
												Composite Fees (Quarterly)
											</th>
											<th
												scope="col"
												className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase"
											>
												No. of Installments
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
											>
												Grand Total
											</th>
										</tr>
									</thead>
									<TableComponent />
								</table>
								{/* Transportation fees per month  */}
								<p className="text-center">
									<span className="text-lg sm:text-sm text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
										[Optional Fees] Transportation fees per month:{" "}
									</span>
									<span className="text-lg sm:text-sm text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
										{" "}
										₹2100 x 4 = ₹8400
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<TabContent title="Breakdown of Fees">
					<ul className="list-disc md:pl-8">
						<li className="mb-3">
							<h1 className="font-bold">Admission Fees</h1>
							<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								This is a one-time fee paid at the time of admission, and it
								typically varies based on the grade for which the student is
								seeking admission.
							</p>
						</li>
						<li className="mb-3">
							<h1 className="font-bold">Composite Fees</h1>
							<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								These are recurring fees that may be paid in installments,
								usually over the course of the academic year. They cover various
								aspects of the student&apos;s education, such as facilities,
								resources, and services provided by the school.
							</p>
						</li>

						<li className="mb-3">
							<h1 className="font-bold">Optional Fees (Transportation)</h1>
							<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
								These fees are optional and may apply if the student chooses to
								use school transport services. They are typically not included
								in the composite fees.
							</p>
						</li>
					</ul>
				</TabContent>

				<TabContent title="Payment Schedule">
					<p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						Fees are typically payable in installments, and we offer different
						payment options to cater to your convenience. The specific payment
						schedule, including due dates and the number of installments, will
						be communicated to you at the beginning of each academic year.
					</p>
					<p className="pt-5 text-lg sm:text-sm font-bold text-gray-800 dark:text-gray-200 leading-loose sm:leading-loose sm:tracking-wide">
						Note: Fee details, including payment schedules and amounts, may vary
						from year to year. It&apos;s essential to refer to the most recent
						fee information provided by the school administration.
					</p>
				</TabContent>
			</div>
		</Content>
	);
};

export default FeeStructure;
