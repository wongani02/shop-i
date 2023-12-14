'use client'

import Currency from "@/components/custom_ui/Currency";
import IconButton from "@/components/custom_ui/IconButton";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CartItemProps {
    item: Product
}
 
const CartItem: FunctionComponent<CartItemProps> = ({item}) => {

    const cart = useCart();

    const onItemRemove = () =>{
        cart.removeItem(item.id)
    }

    return ( 
        <li className="flex border-b py-6">
            <div className="w-24 h-24 relative rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                className="object-fit object-cover object-center"
                fill
                alt="product image"
                src={item.images[0].url}
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onItemRemove} icon={<X size={15}/>}/>
                </div>
                <div className="relative pr-3 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {item.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm ">
                        <p className="text-gray-500">
                            {item.color.name}
                        </p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                            {item.size.name}
                        </p>
                    </div>
                    <Currency value={item.price}/>
                </div>
            </div>
        </li>
    );
}
 
export default CartItem;