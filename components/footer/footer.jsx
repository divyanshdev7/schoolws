// SocialIcons.jsx
import React from "react";

const SocialIcon = ({ href, name, children }) => (
	<li>
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="text-white transition hover:opacity-75"
		>
			<span className="sr-only">{name}</span>
			{children}
		</a>
	</li>
);

const SocialIcons = () => (
	<ul className="flex gap-6 mt-8">
		<SocialIcon href="https://www.facebook.com/tvjhs" name="Facebook">
			<svg
				className="w-6 h-6 hover:fill-blue-600 transition-colors duration-200 cursor-pointer"
				fill="white"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		</SocialIcon>
		<SocialIcon href="/" name="Instagram">
			<svg
				className="w-6 h-6 hover:fill-red-500 transition-colors duration-200 cursor-pointer"
				fill="white"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		</SocialIcon>
		<SocialIcon href="/" name="LinkedIn">
			<svg
				className="w-6 h-6 hover:fill-[#0077b5] transition-colors duration-200 cursor-pointer"
				fill="white"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
			</svg>
		</SocialIcon>
		<SocialIcon href="/" name="WhatsApp">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				className="w-6 h-6 hover:fill-[#25D366] transition-colors duration-200 cursor-pointer"
				viewBox="0 0 56 56"
			>
				<path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
			</svg>
		</SocialIcon>
	</ul>
);

// ContactInfo.jsx
const ContactInfo = () => (
	<div>
		<p>
			<span className="text-xs tracking-wide text-white uppercase">
				Call us
			</span>
			<a
				href="#"
				className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
			>
				9935989636
			</a>
			<a
				href="#"
				className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
			>
				9889662954
			</a>
		</p>

		<ul className="mt-8 space-y-1 text-sm">
			<li className="text-white">Monday to Friday: 10am - 5pm</li>
			<li className="text-white">Weekend: 10am - 3pm</li>
		</ul>

		<SocialIcons />
	</div>
);

// FooterLinks.jsx
const FooterLink = ({ href, children }) => (
	<li>
		<a href={href} className="text-white transition hover:opacity-75">
			{children}
		</a>
	</li>
);

const QuickLinks = () => (
	<div>
		<p className="font-medium text-gray-100">QUICK LINKS</p>
		<nav aria-label="Footer Navigation - Services" className="mt-6">
			<ul className="space-y-4 text-sm">
				<FooterLink href="/about/history">About Us</FooterLink>
				<FooterLink href="/contact-us">Contact Us</FooterLink>
				<FooterLink href="#">Admissions</FooterLink>
				<FooterLink href="#">Academics</FooterLink>
				<FooterLink href="#">Fee Structure</FooterLink>
			</ul>
		</nav>
	</div>
);

const SchoolLinks = () => (
	<div>
		<p className="font-medium text-gray-100">SCHOOL</p>
		<nav aria-label="Footer Navigation - Company" className="mt-6">
			<ul className="space-y-4 text-sm">
				<FooterLink href="#">Message Desk</FooterLink>
				<FooterLink href="#">Gallery</FooterLink>
				<FooterLink href="#">Notice</FooterLink>
			</ul>
		</nav>
	</div>
);

// FooterBottom.jsx
const FooterBottom = () => (
	<div className="pt-12 mt-12 border-t border-gray-100">
		<div className="sm:flex sm:items-center sm:justify-between">
			<nav aria-label="Footer Navigation - Support">
				<ul className="flex flex-wrap gap-4 text-xs">
					<FooterLink href="#">Terms & Conditions</FooterLink>
					<FooterLink href="#">Privacy Policy</FooterLink>
					<FooterLink href="#">Cookies</FooterLink>
				</ul>
			</nav>

			<p className="mt-8 text-xs text-white sm:mt-0">
				&copy; 2023. Powered by Divyansh
			</p>
		</div>
	</div>
);

// Main Footer component
import Image from "next/image";
import sLogo from "@public/images/logo.png";

export default function Footer() {
	return (
		<div>
			<footer
				aria-label="Site Footer"
				className="bg-gradient-to-r from-zinc-900 to-zinc-900 lg:grid lg:grid-cols-5"
			>
				<div className="relative block h-32 lg:col-span-2 lg:h-full">
					<Image
						src={sLogo}
						alt="School Logo"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 text-white">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						<ContactInfo />
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<QuickLinks />
							<SchoolLinks />
						</div>
					</div>
					<FooterBottom />
				</div>
			</footer>
		</div>
	);
}
