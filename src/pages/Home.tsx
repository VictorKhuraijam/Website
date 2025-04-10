import {
  About,
  Contact,
  Footer,
  Nav,
  Hero,
  Projects,
  Qualification,
  Skills
} from "../components/index";


function HomePage() {
	return (
		<>
			<div className="bg-black">
			<header className="bg-header-bg w-full mx-auto px-4 md:px-20 fixed top-0 z-50 ">
				<Nav />
			</header>

			<main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Qualification />
				<Contact />
			</main>

			<footer className="bg-footer-bg w-full">
				<hr className="w-full h-0.5 mx-auto mt-20 bg-neutral-200 border-0"></hr>

				<Footer />
			</footer>
			</div>
		</>
	);
}

export default HomePage;
