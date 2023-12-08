'use client'

import { Product } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";
import IconButton from "../custom_ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../custom_ui/Currency";

interface ProductCardProps {
    product: Product
}
 
const ProductCard: FunctionComponent<ProductCardProps> = ({product}) => {
    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                className="object-cover aspect-square rounded-md"
                fill
                alt="Product Image"
                src={product?.images[0]?.url}
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-6 justify-center">
                        <IconButton 
                        icon={<Expand size={20} className="text-gray-600"/>}
                        onClick={()=>{}}
                        />
                        <IconButton 
                        icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        onClick={()=>{}}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">
                    {product.name}
                </p>
                <p className="text-sm text-gray-500">
                    {product.category.name}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={product?.price}/>
            </div>
        </div>
    );
}
 
export default ProductCard;