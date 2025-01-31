"use client";
import events from "@app/data/events";
import GalleryGrid from "./main/GalleryGrid";

const EventCards = () => {
	return <GalleryGrid data={events} route={"school-events"} />;
};

export default EventCards;
