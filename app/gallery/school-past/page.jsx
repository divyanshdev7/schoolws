"use client";
import "@app/about/styles.css";
import "../lightbox/index.css";
import "/app/about/styles.css";
import MainPage from "../mainPageComponent";
import PastPhotoCards from "../components/SchoolPastPhotos";

const SchoolPast = () => {
	return <MainPage title="Glimpse of the Past" Component={PastPhotoCards} />;
};

export default SchoolPast;
