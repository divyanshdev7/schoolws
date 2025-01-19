"use client";
import Link from "next/link";

const ContactUs = () => {
	return (
		<section>
			{/* Hero*/}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
				<div className="max-w-3xl text-center mx-auto">
					<h1 className="block font-medium text-7xl sm:text-8xl md:text-8xl lg:text-9xl tracking-tighter ">
						Contact Us
					</h1>
				</div>
				<div className="max-w-3xl text-center mx-auto">
					<p className="text-md sm:text-lg text-gray-600">
						We&apos;d love to talk about how we can help you.
					</p>
				</div>
			</div>

			{/* Socials */}
			<div>
				<div className="max-w-5xl px-4 sm:px-6 mx-auto mt-5">
					<div className="flex justify-center gap-6">
						{/* Facebook  */}
						<div className="text-center group">
							<Link href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="40"
									height="40"
									viewBox="0 0 24 24"
									className="hover:fill-blue-600 transition-colors duration-200 cursor-pointer"
								>
									<path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
								</svg>
							</Link>
						</div>
						{/* Instagram */}
						<div className="text-center">
							<Link href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="40"
									height="40"
									viewBox="0 0 24 24"
									className="hover:fill-red-500 transition-colors duration-200 cursor-pointer"
								>
									<path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
								</svg>
							</Link>
						</div>
						{/* Linkedin*/}
						<div className="text-center">
							<Link href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="40"
									height="40"
									viewBox="0 0 24 24"
									className="hover:fill-[#0077b5] transition-colors duration-200 cursor-pointer"
								>
									<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
								</svg>
							</Link>
						</div>
						{/* WhatsApp*/}
						<div className="text-center">
							<Link href="https://wa.me/message/ZUIAGYCX4ND3O1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="40"
									height="40"
									viewBox="0 0 56 56"
									className="hover:fill-[#25D366] transition-colors duration-200 cursor-pointer"
								>
									<path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
								</svg>
							</Link>
						</div>
					</div>
					{/* End Grid */}
					{/* Card */}

					{/* End Card */}
				</div>
				{/* End Team */}
			</div>

			{/* Form + Details*/}
			<div className="max-w-[95rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="max-w-2xl lg:max-w-5xl mx-auto">
					<div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-20">
						{/* Form*/}
						<div className="flex flex-col rounded-xl border-none md:border p-4 sm:p-6 lg:p-8 dark:border-gray-700">
							<h2 className="mb-8 text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-200 lg:text-left text-center tracking-tight">
								Your Feedback Matters
								{/* <p className="text-sm font-light mt-2">Tell Us how we are doing</p> */}
							</h2>

							<form>
								<div className="grid gap-4">
									{/* Grid */}
									<div>
										<div>
											<label
												htmlFor="hs-firstname-contacts-1"
												className="sr-only"
											>
												Full Name
											</label>
											<input
												type="text"
												name="hs-firstname-contacts-1"
												id="hs-firstname-contacts-1"
												className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
												placeholder="First Name"
											/>
										</div>
										{/* <div>
											<label
												htmlFor="hs-lastname-contacts-1"
												className="sr-only"
											>
												Last Name
											</label>
											<input
												type="text"
												name="hs-lastname-contacts-1"
												id="hs-lastname-contacts-1"
												className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
												placeholder="Last Name"
											/>
										</div> */}
									</div>
									{/* End Grid */}
									<div>
										<label htmlFor="hs-email-contacts-1" className="sr-only">
											Email
										</label>
										<input
											type="email"
											name="hs-email-contacts-1"
											id="hs-email-contacts-1"
											autoComplete="email"
											className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
											placeholder="Email"
										/>
									</div>
									{/* <div>
										<label htmlFor="hs-phone-number-1" className="sr-only">
											Phone Number
										</label>
										<input
											type="text"
											name="hs-phone-number-1"
											id="hs-phone-number-1"
											className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
											placeholder="Phone Number"
										/>
									</div> */}
									<div>
										<label htmlFor="hs-about-contacts-1" className="sr-only">
											Feedback
										</label>
										<textarea
											id="hs-about-contacts-1"
											name="hs-about-contacts-1"
											rows={4}
											className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
											placeholder="Feedback"
											defaultValue={""}
										/>
									</div>
								</div>
								{/* End Grid */}
								<div className="mt-4 grid">
									<button
										type="submit"
										className="inline-flex justify-center items-center gap-x-3 text-center bg-zinc-900 hover:bg-gray-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
									>
										Send feedback
									</button>
								</div>
								<div className="mt-3 text-center">
									{/* <p className="text-sm text-gray-500">
										We&apos;ll get back to you in 1-2 business days.
									</p> */}
								</div>
							</form>
						</div>
						{/* End Form */}

						{/* Contact details */}
						<div className="flex flex-col rounded-xl p-2 m-3 dark:border-gray-700 mb-14">
							<div className="divide-y divide-gray-100 dark:divide-gray-800">
								{/* <h3 className="text-3xl font-semibold mb-2 mt-2 text-center md:text-left tracking-tight">
									School Details
								</h3> */}
								<div className="flex gap-x-7 mt-3">
									<svg
										className="flex-shrink-0 w-7 h-7 dark:text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z" />
									</svg>

									<div>
										{/* <h3 className="text-2xl dark:text-gray-200">Address</h3> */}
										<a href="https://maps.app.goo.gl/HYMtuBgmrDxwHbdXA">
											<p className="text-lg md:text-xl text-gray-900 hover:underline hover:text-blue-600 ">
												Mamapar, Near Sewai Bazar, Gorakhpur <br />
												Uttar Pradesh, 273401
											</p>
										</a>
									</div>
								</div>
								{/* End Icon Block */}

								{/* Icon Block */}
								<div className="flex items-center py-2 gap-x-7 mt-4">
									<svg
										className="w-[28px] h-[28px] dark:text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="currentColor"
										viewBox="0 0 90 90"
									>
										<path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>
									</svg>
									<div>
										<a
											className="text-lg md:text-xl hover:underline text-gray-900 hover:text-blue-600"
											href="mailto:tvsgkp2003@gmail.com"
										>
											tvsgkp2003@gmail.com
										</a>
									</div>
								</div>

								{/* End Icon Block */}
								{/* Icon Block */}
								<div className="flex gap-x-7 py-2 mt-4">
									<svg
										className="flex-shrink-0 w-7 h-7 dark:text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										width={18}
										height={18}
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
											stroke="#000000"
											strokeWidth="1"
											strokeLinecap="round"
										></path>
									</svg>
									<div>
										{/* <h3 className=" text-2xl dark:text-gray-200">Phone</h3> */}

										<div className="text-lg md:text-xl">
											<div className="flex gap-3">
												<div>
													<a
														href="tel:+9889442995"
														className="hover:text-blue-600 hover:underline text-gray-900"
													>
														9889662995
													</a>
													<br />
													<a
														href="tel:+9935989636"
														className="hover:text-blue-600 hover:underline text-gray-900"
													>
														9935989636
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* End Icon Block */}
								{/* Icon Block */}
								<div className="flex gap-x-7 py-2 mt-4">
									<svg
										className="flex-shrink-0 w-8 h-8 dark:text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										width={32}
										height={32}
										fill="currentColor"
										viewBox="0 0 32 32"
									>
										<path d="M16 3.5c-7.181 0-13 5.82-13 13s5.819 13 13 13c7.179 0 13-5.82 13-13s-5.82-13-13-13zM15.895 27.027c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5c5.798 0 10.5 4.701 10.5 10.5s-4.702 10.5-10.5 10.5zM18.93 17.131h-2.98v-5.032c0-0.546-0.443-0.99-0.989-0.99s-0.99 0.443-0.99 0.99v6.021c0 0.547 0.443 0.989 0.99 0.989h3.969c0.547 0 0.99-0.442 0.99-0.989 0-0.546-0.443-0.989-0.99-0.989z"></path>
									</svg>
									<div>
										{/* <h3 className=" text-2xl dark:text-gray-200">Phone</h3> */}

										<div className="text-lg md:text-xl -ml-1">
											<p>
												<b>Office hours</b>
											</p>
											<div className="text-lg">
												<p>8.00AM - 3.00PM : Monday to Friday</p>
												<p>8.00AM - 1.00PM : Saturday</p>
											</div>
										</div>
									</div>
								</div>
								{/* End Icon Block */}
							</div>
						</div>
						{/* End Contact details */}
					</div>
				</div>
			</div>

			{/* Map */}
			<div className="max-w-[90rem] px-5 mx-auto text-center mb-14">
				{/* <h1 className="block font-medium text-3xl lg:text-8xl tracking-tighter ">Reach out to us </h1> */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114161.5250262134!2d83.20827511666985!3d26.59888702741887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399142399d1e972d%3A0x1ca3eda7a35461cc!2sTalent%20Vision%20Jr.High%20school%F0%9F%8F%AB!5e0!3m2!1sen!2sin!4v1696532703527!5m2!1sen!2sin"
					width="100%"
					height={550}
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="rounded-xl"
				/>
			</div>
		</section>
	);
};

export default ContactUs;
