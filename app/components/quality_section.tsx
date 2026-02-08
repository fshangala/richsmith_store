'use client';

export default function QualitySection() {
    return (
        <section className="px-4 py-16 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 mx-auto flex justify-center items-center bg-linear-to-br from-primary-100 to-secondary-100 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-amber-700" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        </div>
                        <h3 className="text-xl font-bold text-900 mb-3">Premium Quality</h3>
                        <p className="text-stone-600">Every product is tested for purity and flavor to ensure the highest quality standards.</p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 mx-auto flex justify-center items-center bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-8 h-8 text-green-700" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-900 mb-3">Sustainably Sourced</h3>
                        <p className="text-stone-600">We partner with ethical suppliers and use eco-friendly packaging for a better planet.</p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 mx-auto flex justify-center items-center bg-linear-to-br from-secondary-100 to-red-100 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-8 h-8 text-orange-700" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-900 mb-3">Authentic Blends</h3>
                        <p className="text-stone-600">Traditional recipes and authentic blends that honor culinary heritage and tradition.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}