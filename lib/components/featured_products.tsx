'use client';

import ProductModel from "../models/product";
import Product from "./product";

export default function FeaturedProducts() {

    const products = [
        new ProductModel(0, "Corn Flour", "https://customer-assets.emergentagent.com/job_spice-paradise-9/artifacts/jviresz7_b267e0c9-60d1-451d-a6eb-dba4a46956c5.jpeg", "Flours & Starches", "Rich & Creamy corn flour perfect for thicker soups, gravies, and sauces. Premium quality for smooth, lump-free consistency. Product of India."),
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Featured Products</h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">Discover our most popular spices, seasonings, and superfoods, loved by chefs and health-conscious home cooks alike.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>
                <div className="text-center">
                    <a href="/products" className="inline-flex justify-center items-center gap-2 whitespace-nowrap text-sm shadow-sm rounded-md border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-8 font-medium transition-all duration-300 h-10">
                        View All Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}