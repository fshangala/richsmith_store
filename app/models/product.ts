'use client';

class ProductModel {

    id: number;
    name: string;
    imageUrl: string;
    category: string
    description: string;

    constructor(id:number, name:string, imageUrl:string, category:string, description:string) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.category = category;
        this.description = description;
    }
}

export default ProductModel;