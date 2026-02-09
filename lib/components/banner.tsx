'use client';

export default function Banner() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-600 to-secondary-700">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Cooking?</h2>
                <p className="text-xl text-primary-50 mb-10">Get in touch with us to learn more about our products and find the perfect spices for your needs.</p>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-10 rounded-md bg-white text-primary-700 hover:bg-stone-50 px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    Contact Us Today
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
            </div>
        </section>
    );
}