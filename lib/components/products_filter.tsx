'use client';

export default function ProductsFilter() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-1">
                <input className="flex w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-stone-300 focus:border-primary-500 focus:ring-primary-500" id="search" placeholder="Search products..." type="text" value="" name="search" onChange={function(){}} />
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md px-4 bg-primary-600 hover:bg-primary-700 text-white h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">Search</button>
            </div>
            <div>
                <h2 className="text-lg font-bold text-stone-900 mb-4">Categories</h2>
                <ul className="space-y-2">
                    <li><input type="checkbox" id="category1" className="mr-2" /><label htmlFor="category1">Spices</label></li>
                    <li><input type="checkbox" id="category2" className="mr-2" /><label htmlFor="category2">Seasonings</label></li>
                    <li><input type="checkbox" id="category3" className="mr-2" /><label htmlFor="category3">Superfoods</label></li>
                </ul>
            </div>
        </div>
    );
}