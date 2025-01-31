"use client";
import pastPhotosData from "@app/data/pastPhotos";
import GalleryGrid from "./main/GalleryGrid";

const PastPhotoCards = () => {
	return <GalleryGrid data={pastPhotosData} route={"school-past"} />;
};

export default PastPhotoCards;
