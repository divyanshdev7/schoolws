"use client";
import "@app/about/styles.css";
import "../lightbox/index.css";
import "/app/about/styles.css";
import MainPage from "../mainPageComponent";
import UniformCards from "../components/SchoolUniform";

const SchoolPast = () => {
	return <MainPage title="School Uniform" Component={UniformCards} />;
};

export default SchoolPast;
