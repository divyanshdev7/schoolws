"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

export default function PrelineScript() {
	const [loaded, setLoaded] = useState(true);
	const path = usePathname();

	useEffect(() => {
		import("preline/preline").then(() => {
			// This code will run after the preline/preline module has been loaded
			if (
				window.HSStaticMethods &&
				typeof window.HSStaticMethods.autoInit === "function"
			) {
				console.log("Running autoInit");
				window.HSStaticMethods.autoInit();
				console.log("Finished running autoInit");
				setLoaded(false);
			} else {
				console.error(
					"HSStaticMethods is not defined or autoInit is not a function"
				);
			}
		});
	}, [path]);

	if (loaded) {
		return null;
	}
}
