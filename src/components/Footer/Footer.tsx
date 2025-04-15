import {
	AiOutlineGithub,
	AiOutlineLinkedin,
} from "react-icons/ai";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<div className="mx-auto  px-4 py-6 md:py-8 flex flex-col text-center gap-4 text-neutral-900 md:flex-row md:justify-between">
				<div className="flex flex-row items-center justify-center space-x-1 text-neutral-100 text-lg">
					© {currentYear} Victor Khuraijam
				</div>

				<div className="flex flex-row items-center justify-center space-x-2 mb-1">
					<a
						href="https://github.com/VictorKhuraijam"
						rel="noreferrer"
						target="_blank"
					>
						<AiOutlineGithub
							className="hover:-translate-y-1 hover:text-neutral-400 transition cursor-pointer text-neutral-100"
							size={40}
						/>
					</a>

					<a
						href="https://www.linkedin.com/in/victor-khuraijam-951060286/"
						rel="noreferrer"
						target="_blank"
					>
						<AiOutlineLinkedin
							className="hover:-translate-y-1 hover:text-linkedin transition cursor-pointer text-neutral-100"
							size={40}
						/>
					</a>


				</div>
			</div>
		</div>
	);
}

export default Footer;
