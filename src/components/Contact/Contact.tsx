import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


// const email = "khuraijamvictor@gmail.com";

function Contact() {
	const [loading, setLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const formData = new FormData(event.target as HTMLFormElement);

		formData.append("access_key", "a5940292-2ce6-4ee3-bcb6-a9ea68251fce");

		try {
			const response = await axios.post(
				"https://api.web3forms.com/submit",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.data.success) {
				// console.log("Success", response);
				toast.success(response.data.message);
				if (formRef.current) {
					formRef.current.reset();
				}
			} else {
				// console.log("Error", response);
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error("An error occurred", error);
			toast.error("An error occurred, please try again later");
		}
		setLoading(false);
	};
	return (
		<section id="contact">
			<div
				className="animate-fadeIn animation-delay-2 mx-auto p-6 md:px-10 py-14 max-w-4xl
							bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
							rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
			>
				<h2 className="mb-10 text-3xl font-bold md:mt-0 md:text-4xl text-center">
					Contact
					<hr
						className="w-12 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[54px]
									md:mt-1 md:w-14 md:-translate-x-[65px]"
					/>
				</h2>
				<div className="flex flex-col items-center md:flex-row md:items-start md:px-10">
					<div className="md:w-2/5 mb-8 text-center md:text-left md:pr-10 md:mr-4">
						<h3 className="text-2xl md:text-3xl font-semibold mb-4">
							I'm available for full time opportunities
						</h3>
						<p>
							Feel free to directly contact me via{" "}
							{/* <a
								className="hover:text-secondary transition-colors"
								href={`mailto:${email}`}
							>
								<u>Email</u>
							</a>{" "}
							or{" "} */}
							<Link
								className="hover:text-secondary transition-colors"
								to={`https://www.linkedin.com/in/victor-khuraijam-951060286/`}
                target="_blank"
							>
								<u>Linkedin</u>
							</Link>
						</p>
					</div>

					<div className="md:w-3/5 w-full">
						<form ref={formRef}  onSubmit={onSubmitForm} className="flex flex-col gap-2">
							<input
								type="hidden"
								name="subject"
								value="New Submission from Contact Form. Portfolio Website"
							></input>
							<input type="checkbox" name="botcheck" className="hidden"></input>

							<input className="contact-input" type="text" name="name" placeholder="Name" required />


							<input className="contact-input"  type="email" name="email" placeholder="Email" required />

              <textarea
                className="custom-input-textarea"
								name="message"
								placeholder="Message"
								required
							></textarea>

							<button  type="submit" className="bg-red-500 rounded py-1.5 cursor-pointer disabled:opacity-70 flex items-center justify-center"
                disabled={loading}
              >
								<span>Submit</span>
                {loading && <Loading />}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
