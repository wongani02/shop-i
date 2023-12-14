'use client'

import Container from "@/components/app_components/Container";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

interface CartProps {
    
}
 
const Cart: FunctionComponent<CartProps> = () => {

    const [isMounted, setIsMounted] = useState(false);

    const cart = useCart();
    const router = useRouter();

    useEffect(()=>{
        setIsMounted(true);
    }, [])

    if (!isMounted){
        return null
    }
    
    return ( 
        <div className="bg-white">
            <Container>
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">
                        Shopping Cart
                    </h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart</p>}
                            <ul>
                                {cart.items.map((item)=>(
                                    <CartItem key={item.id} item={item}/>
                                ))}
                            </ul>
                        </div>
                        <CartSummary/>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default Cart;