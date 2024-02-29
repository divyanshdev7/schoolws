/** @type {import('tailwindcss').Config} */

module.exports = {
	// darkMode: "media",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/preline/preline.js",
	],
	plugins: [
		require('preline/plugin'),
	],

	theme: {
		extend: {
			screens: {
				"xs": "475px",
				"2xs": "375px",
				"3xs": "320px",
				"xmd": "952px",
			},
			fontFamily: {
				satoshi: ["Satoshi-Variable", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
};
