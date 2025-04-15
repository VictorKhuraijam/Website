import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProjectType, projects } from "../data/projects";
import SlideUp from "./SlideUp";

function Projects() {



	return (
		<section id="projects">
			<div className="py-16 animate-fadeIn animation-delay-2">
				<h2 className="relative text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Projects
					<hr
						className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[56px]
								md:-translate-x-[68px] md:mt-1 md:w-12"
					/>
				</h2>

				{/* GRID */}
				<div
					className="animate-fadeIn grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_300px))]
					gap-x-6 gap-y-6 mt-10"
				>
					{/* PROJECT CARD */}

					{projects.map((project: ProjectType) => (
						<SlideUp
							data-hover
							classes="project-item"
							offset="-100px 0px -100px 0px"
							key={project.id}
							onClick={() =>
								window.open(project.link || project.github, "_blank")
							}
						>
							{/* PROJECT IMAGE THUMBNAIL */}
							<img data-hover src={project.thumbnail} alt={project.title} />
							<div data-hover className="content-slate md:cursor-none">
								{/* PROJECT TITLE */}
								<h3
									data-hover
									className="text-xl md:text-2xl font-bold text-center text-white mb-2"
								>
									{project.title}
								</h3>

								{/* PROJECT ABOUT */}
								<p
									data-hover
									className="text-gray-300 block mb-4 text-center"
								>
									{project.about}
								</p>

								{/* TECHNOLOGIES */}
								{project.tech && (
									<div
										data-hover
										className="flex flex-wrap gap-2 justify-center mb-5"
									>
										{project.tech.map((item, index) => (
											<p
												data-hover
												key={index}
												className="bg-[#353f50] px-2 py-1 rounded-xl md:text-sm text-xs"
											>
												{item}
											</p>
										))}
									</div>
								)}

								{/* GITHUB AND DEMO LINKS */}
								<div
									data-hover
									className="flex w-full gap-4 justify-center"
								>
									{project.github && (
										<Link
											to={project.github}
											target="_blank"
											onClick={(e) => e.stopPropagation()}
										>
											<div className="flex flex-col items-center group/item">
												<BsGithub
													size={30}
													className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
												/>
												<span className="text-white">GitHub</span>
											</div>
										</Link>
									)}

									{project.link && (
										<Link
											to={project.link}
											target="_blank"
											onClick={(e) => e.stopPropagation()}
										>
											<div className="flex flex-col items-center group/item">
												<BsArrowUpRightSquare
													size={30}
													className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
												/>
												<span className="text-white">Live Demo</span>
											</div>
										</Link>
									)}
								</div>
							</div>
						</SlideUp>
					))}

				</div>
			</div>
		</section>
	);
}

export default Projects;
