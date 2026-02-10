export default function Contact() {
    return (
        <div className="min-h-screen bg-stone-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-stone-900 mb-4">Get In Touch</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <div className="rounded-xl border bg-white text-stone-900 shadow border-stone-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-linear-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-primary-700" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900 mb-2">Email Us</h3>
                                <p className="text-stone-600">info@richsmithfood.com</p>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-white text-stone-900 shadow border-stone-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-linear-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-green-700" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900 mb-2">Call Us</h3><p className="text-stone-600">+91 7822862651</p>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-white text-stone-900 shadow border-stone-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-blue-700" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900 mb-2">Visit Us</h3>
                                <p className="text-stone-600">180/a Sindhi Colony, Khamla, Nagpur 440025</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    );
}