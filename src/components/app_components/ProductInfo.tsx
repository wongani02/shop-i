'use client'

import { Product } from "@/types";
import { FunctionComponent } from "react";
import Currency from "../custom_ui/Currency";
import Button from "../custom_ui/Button";
import { ShoppingCart } from "lucide-react";


interface ProductInfoProps {
    data: Product
}
 
const ProductInfo: FunctionComponent<ProductInfoProps> = ({data}) => {
    return ( 
        <div>
            <h3 className="font-bold text-3xl text-gray-900">
                {data.name}
            </h3>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Size :
                    </h3>
                    <div>
                        {data?.size?.value} ({data?.size?.name})
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Color :
                    </h3>
                    <div style={{backgroundColor: data?.color?.value}} className="h-6 w-6 rounded-full border border-gray-600"/>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-3">
                    Add to Cart 
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    );
}
 
export default ProductInfo;