import Link from "next/link";

export const Footer = () => {
	return (
		<footer id="footer">
			{/* <hr className="w-11/12 mx-auto" /> */}

			<section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
				<div className="col-span-full xl:col-span-2">
					<a rel="noreferrer noopener" href="/" className="font-bold text-xl flex">
					🤖 AI.com
					</a>
					<p className="text-muted-foreground mt-4">
						Make AI great
						<br />
						Copyright © 2024 - All rights reserved
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Follow US</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Github
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Twitter
						</a>
					</div>
					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Newsletter
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">About</h3>
					<div>
						<Link
							rel="noreferrer noopener"
							href="/docs"
							className="opacity-60 hover:opacity-100"
						>
							Docs
						</Link>
					</div>
					<div>
						<a
							rel="noreferrer noopener"
							href="#features"
							className="opacity-60 hover:opacity-100"
						>
							Features
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#pricing"
							className="opacity-60 hover:opacity-100"
						>
							Pricing
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#faq"
							className="opacity-60 hover:opacity-100"
						>
							FAQ
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Community</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Youtube
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Legal</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="/tos"
							className="opacity-60 hover:opacity-100"
						>
							Terms & Conditions
						</a>
					</div>
					<div>
						<a
							rel="noreferrer noopener"
							href="/privacy-policy"
							className="opacity-60 hover:opacity-100"
						>
							Privacy Policy
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
};
