"use client";
import "@app/about/styles.css";
import "../lightbox/index.css";
import "/app/about/styles.css";
import MainPage from "../mainPageComponent";
import InfraCards from "../components/SchoolInfra";

const SchoolPast = () => {
	return <MainPage title="School Infrastructure" Component={InfraCards} />;
};

export default SchoolPast;
