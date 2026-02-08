'use client';

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  function toggleMenu() {
    const nav = document.querySelector("#main-nav");
    if (nav) {
      nav.classList.toggle("hidden");
      nav.classList.toggle("flex");
    }
  }

  return (
    <header className="bg-white text-black shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <div>
                <a href="/" className="flex gap-4">
                    <div className="bg-primary-600 flex items-center justify-center rounded-xl w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat w-7 h-7 text-white" aria-hidden="true"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl">Rich Smith</span>
                        <span className="text-xs">Food Products</span>
                    </div>
                </a>
            </div>
            <div className="relative">
                <button className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600" aria-label="Toggle menu" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <nav id="main-nav" className="hidden sm:flex flex-col sm:flex-row gap-1 items-center absolute sm:static right-0 bg-white border border-stone-200 sm:border-none overflow-hidden sm:p-0 rounded-md sm:rounded-none">
                {navItems.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={`px-10 sm:px-4 py-2 rounded-md whitespace-nowrap ${
                        pathname === item.href
                        ? "bg-primary-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    >
                    {item.name}
                    </a>
                ))}
                </nav>
            </div>
        </div>
    </header>
  );
}