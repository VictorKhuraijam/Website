import RoyaleRex from '../assets/projects/RoyaleRex/Ecomerce.png'
import gentile from "../assets/projects/gentile/main1.jpg";
import lego from "../assets/projects/lego-homage/main1.png";

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
	},
  {
		id: 1,
		title: "Gentile Etiquetas Website",
		about: "Wordpress custom theme",
		description: "",
		thumbnail: gentile,
		tech: ["Wordpress", "PHP", "JavaScript"],
		github: "",
		link: "http://gentileetiquetas.com.br",
		filter: ["All", "Web Development"],
		type: "Web Development",
	},
  {
  id: 2,
  title: "LEGO Homage Piece",
  about: "Homage project of LEGO.com",
  description: "",
  thumbnail: lego,
  tech: ["HTML", "CSS", "SASS"],
  github: "https://github.com/Gunnar50/lego-index-clone",
  link: "https://lego-homage-gustavo-passarella.netlify.app/",
  filter: ["All", "Web Development"],
  type: "Frontend",
  },
]
