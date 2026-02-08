export default function Footer() {

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "Products", href: "/products" },
		{ name: "About Us", href: "/about-us" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<footer className="bg-gray-900 text-gray-300 py-4 mt-8">
			<div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row justify-between items-start px-4">
				<div className="flex flex-col gap-4">
					<a href="/" className="flex gap-4">
							<div className="bg-primary flex items-center justify-center rounded-xl w-12 h-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat w-7 h-7 text-white" aria-hidden="true"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
							</div>
							<div className="flex flex-col">
									<span className="font-bold text-xl">Rich Smith</span>
									<span className="text-xs">Food Products</span>
							</div>
					</a>
					<p className="text-sm">Premium Spices, Seasonings & Superfoods for Every Kitchen</p>
				</div>
				<div>
					<h2 className="font-bold mb-2 text-white">Quick Links </h2>
					<nav className="flex flex-col gap-1">
						{
							navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="hover:text-primary transition-colors text-sm"
								>
									{item.name}
								</a>
							))
						}
					</nav>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="font-bold mb-2 text-white">Contact Info</h2>
					<a href="mailto:info@richsmithfood.com" className="text-sm flex justify-start items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-primary mt-0.5" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg> <span>info@richsmithfood.com</span></a>
					<a href="tel:+917822862651" className="text-sm flex justify-start items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-primary mt-0.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <span>+91 7822862651</span></a>
					<a href="https://maps.app.goo.gl/pdeBHTJF8JGyVEddA" className="text-sm flex justify-start items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-primary mt-0.5" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <span>180/a Sindhi Colony, Khamla, Nagpur 440025</span></a>
				</div>
			</div>
		</footer>
	);
}