'use client';

export default function Product({ product }: { product: {name: string, imageUrl: string, category: string, description: string} }) {
    return (
        <div className="bg-gray-100 rounded-xl border border-stone-200 shadow-md overflow-hidden">
            <div className="relative overflow-hidden h-64 bg-linear-to-br from-stone-50 to-stone-100">
                <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="absolute top-3 right-3 z-10">
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg animate-pulse">Featured</span>
                </div>
            </div>
            <div className="p-6 relative">
                <div className="mb-2">
                    <span className="text-xs text-primary-700 bg-primary-50 px-2 py-1 rounded shadow-sm">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 hover:text-primary-700 transition-colors duration-300">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <div></div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium border border-stone-200 h-8 rounded-md px-3 text-xs hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-4 h-4 mr-1" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}