"use client";
import infraData from "@app/data/schoolInfra";
import GalleryGrid from "./main/GalleryGrid";

const InfraCards = () => {
	return <GalleryGrid data={infraData} route={"school-infra"} />;
};

export default InfraCards;
