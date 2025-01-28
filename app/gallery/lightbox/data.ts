// Define types
type Slide = {
	src: string;
	title: string;
	description: string;
};

// Image URLs array
const imageUrls = [
	"https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
	"https://images.unsplash.com/photo-1682686581551-867e0b208bd1",
	"https://images.unsplash.com/photo-1682695797221-8164ff1fafc9",
	"https://images.unsplash.com/photo-1700744228339-03c725f5ee57",
	"https://images.unsplash.com/photo-1700839154423-83ea2246621b",
	"https://images.unsplash.com/photo-1700770845346-7e95de335eb0",
	"https://images.unsplash.com/photo-1700751639138-e6628c42b558",
	"https://images.unsplash.com/photo-1700753227268-8832c285591e",
];

// Create slides using map
export const slides: Slide[] = imageUrls.map((url, index) => ({
	src: `${url}?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3`,
	title: `Slide Title ${index + 1}`,
	description: `Slide Description ${index + 1}`,
}));

export type { Slide };
