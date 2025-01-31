"use client";
import "@app/about/styles.css";
import "../lightbox/index.css";
import "/app/about/styles.css";
import MainPage from "../mainPageComponent"
import EventCards from "../components/SchoolEvents"

const SchoolEvents = () => {
	return (
		<MainPage title="School Events" Component={EventCards} />
	);
};

export default SchoolEvents;
