'use client'

import { FunctionComponent, useEffect, useState } from "react";
import Button from "../custom_ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface NavbarActionsProps {
    
}
 
const NavbarActions: FunctionComponent<NavbarActionsProps> = () => {

    const [isMounted, setIsMounted] = useState(false);

    const cart = useCart();
    const router = useRouter();

    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4" >
            <Button
            onClick={()=>router.push('/cart')}
             className="px-4 py-2 flex items-center bg-black rounded-full">
                <ShoppingBag
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}
 
export default NavbarActions;