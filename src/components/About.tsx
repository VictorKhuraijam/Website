import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16
							sm:py-30 md:py-24 md:flex-row md:text-left"
			>
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-about"
				></div>
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						About
						<hr
							className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
						/>
					</h2>
					<p>
						I'm an aspiring <span className="font-bold">Full-Stack Developer </span> from Manipur, India, with a strong interest in building modern, responsive websites and applications.  I recently completed a comprehensive <span className="font-bold">Full-Stack MERN</span>(MongoDB, Express, React, Node.js) development course, where I gained hands-on experience in building dynamic web applications .
					</p>
					<br />
					<p>
          Although I’m just starting out in the tech industry and don't have professional experience yet, I’m passionate about learning, problem-solving, and continuously improving my skills. I’m excited to begin my journey as a junior developer and contribute to real-world projects while growing as a developer.
					</p>
					<br />

					<p>
						I'm now actively looking
						for developer roles and{" "}
						<span className="font-bold">open to new opportunities</span> , so feel free to{" "}
						<ScrollLink
							smooth={true}
							offset={-100}
							spy={true}
							to="contact"
							className="font-bold text-teal-500 cursor-pointer hover:underline"
						>
							{" "}
							get in touch!
						</ScrollLink>
					</p>
				</div>
				<div className="md:w-1/3">
					<img src={aboutImage} alt="Profile image" width={420} />
				</div>
			</div>
		</section>
	);
}

export default About;
