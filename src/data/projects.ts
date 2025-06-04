import RoyaleRex from '../assets/projects/RoyaleRex/Ecomerce.png'


export type ProjectType = {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

export const projects: ProjectType[] = [
	{
		id: 0,
		title: "Pet Store",
		about: "Ecommerce store for pets",
		description: "",
		thumbnail: RoyaleRex,
		tech: ["MongoDb", "NodeJs", "React", "Express"],
		github: "",
		link: "https://pet-store-d7dr.vercel.app/",
		filter: ["All", "Web Development"],
		type: "Web Development",
	}

]
