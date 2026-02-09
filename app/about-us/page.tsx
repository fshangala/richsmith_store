import { title } from "process";

export default function AboutUs() {

    const values = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-7 h-7 text-primary-700" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>,
            title: "Quality First",
            description: "We never compromise on quality. Every batch is tested for purity and flavor."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-7 h-7 text-primary-700" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>,
            title: "Authenticity",
            description: "Traditional recipes and authentic blends that honor culinary heritage."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-7 h-7 text-primary-700" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>,
            title: "Sustainability",
            description: "Committed to sustainable sourcing and eco-friendly packaging."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-7 h-7 text-primary-700" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>,
            title: "Customer Satisfaction",
            description: "Your satisfaction is our priority. We stand behind every product."
        }
    ]

    return (
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-9">About Us</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">Learn about our journey, mission, and commitment to quality</p>
                </div>
                <div className="mb-20">
                    <div className="bg-linear-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 shadow-sm">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Story</h2>
                        <p className="text-lg text-stone-700 leading-relaxed mb-6">Rich Smith Food Products has been delivering premium quality spices, seasonings, and nutrient-rich superfoods since our inception. We source the finest ingredients from around the world and blend them with care to bring authentic flavors and health benefits to your kitchen.</p>
                        <p className="text-lg text-stone-700 leading-relaxed">Our mission is to provide high-quality, authentic spices and nutrient-dense superfoods that enhance every meal while maintaining the highest standards of purity and freshness.</p>
                    </div>
                </div>
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-stone-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="w-14 h-14 bg-linear-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-5 hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-3">{value.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-linear-to-br from-primary-600 to-secondary-700 rounded-3xl p-12 text-white relative overflow-hidden">
                    <h2 className="text-4xl font-bold mb-6">Why Choose Rich Smith?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Uncompromising Quality</h3>
                            <p className="text-amber-50 leading-relaxed">We source only the finest ingredients from trusted suppliers around the world. Each batch undergoes rigorous quality testing to ensure superior flavor and purity.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Expert Blending</h3>
                            <p className="text-amber-50 leading-relaxed">Our master blenders combine traditional recipes with modern techniques to create perfectly balanced spice blends that enhance any dish.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Sustainable Practices</h3>
                            <p className="text-amber-50 leading-relaxed">We're committed to environmental responsibility through sustainable sourcing, eco-friendly packaging, and supporting local farming communities.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Customer First</h3>
                            <p className="text-amber-50 leading-relaxed">Your satisfaction is our priority. We stand behind every product and are here to help you find the perfect spices for your culinary needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}