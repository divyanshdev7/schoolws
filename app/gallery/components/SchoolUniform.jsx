"use client";
import uniformsData from "@app/data/schoolUniform";
import GalleryGrid from "./main/GalleryGrid";

const UniformCards = () => {
	return <GalleryGrid data={uniformsData} route={"school-uniform"} />;
};

export default UniformCards;
