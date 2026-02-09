'use client';

export default function Hero() {
    return (
        <section className="bg-primary-200/10 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="rounded-full bg-primary-100 text-primary-800 mb-6 px-4 py-2 inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                    <span className="text-sm font-medium">Premium Quality Since Day One</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    Authentic Spices & Superfoods for
                    <span className="block text-primary-600 font-bold">Every Kitchen</span>
                </h1>
                <p className="text-xl max-w-2xl mx-auto mb-10">Discover the finest selection of premium spices, seasonings, and nutrient-rich seeds, carefully sourced and expertly blended to elevate your culinary creations.</p>
                <div className="flex justify-center gap-2">
                    <a href="/products" className="bg-primary-600 text-white rounded-md hover:bg-primary-700 inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Explore Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                    <a href="/about-us" className="ml-4 text-stone-700 px-6 py-3 rounded-md inline-flex justify-center items-center whitespace-nowrap shadow-sm border-2 border-stone-300 hover:bg-stone-50 text-lg font-medium transition-all duration-300">Our Story</a>
                </div>
            </div>
        </section>
    );
}