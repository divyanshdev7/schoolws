"use client";
import "@styles/globals.css";
import PrelineScript from "./components/PrelineScript";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

// Dynamically import Navbar and Footer components
const DynamicNavbar = dynamic(() => import("@components/header/navbar"));
const DynamicFooter = dynamic(() => import("@components/footer/footer"));
const DynamicBackToTopButton = dynamic(
	() => import("@components/main/BacktoTop")
);

export default function MyApp({ children }: { children: React.ReactNode }) {
	return (
		<>
			<html lang="en" className="scroll-smooth">
				<PrelineScript />
				<body suppressHydrationWarning={true}>
					<DynamicNavbar />
					<main>{children}</main>
					<DynamicFooter />
					<DynamicBackToTopButton />
					<Analytics />
				</body>
			</html>
		</>
	);
}
