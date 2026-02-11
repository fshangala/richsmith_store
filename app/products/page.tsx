import Product from "@/lib/components/product";
import ProductsFilter from "@/lib/components/products_filter";
import ProductModel from "@/lib/models/product";

export default function ProductsPage() {

    const products = [
        {
            id: 0,
            name: "Corn Flour",
            imageUrl: "https://customer-assets.emergentagent.com/job_spice-paradise-9/artifacts/jviresz7_b267e0c9-60d1-451d-a6eb-dba4a46956c5.jpeg",
            category: "Flours & Starches",
            description: "Rich & Creamy corn flour perfect for thicker soups, gravies, and sauces. Premium quality for smooth, lump-free consistency. Product of India."
        }
    ];
    
  return (
    <div className="min-h-screen bg-stone-50 pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ProductsFilter />
                <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}