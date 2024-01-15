'use client'

import Button from "@/components/custom_ui/Button";
import Currency from "@/components/custom_ui/Currency";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import axios from 'axios'
import { toast } from "@/components/ui/use-toast";

interface CartSummaryProps {
    
}
 
const CartSummary: FunctionComponent<CartSummaryProps> = () => {

    const items = useCart((state)=>state.items);
    const removeAll = useCart((state)=>state.removeAll);
    const searchParams = useSearchParams();

    const totalPrice = items.reduce((total, item)=>{
        return total + Number(item.price)
    }, 0)

    const onCheckout = async () =>{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item)=>item.id)
        })

        window.location = response.data.url
    }

    useEffect(()=>{
        if (searchParams.get('success')){
            toast({
                title: 'Payment Completed'
            })
            removeAll
        }

        if (searchParams.get('canceled')){
            toast({
                title: 'Could not complete purchase',
                description: 'Something went wrong',
                variant: 'destructive'
            })
        }

    }, [searchParams, removeAll])
    
    return ( 
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="font-medium text-lg text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice}/>
                </div>
            </div>
            <Button disabled={items.length === 0} onClick={onCheckout} className='w-full  mt-6'>
                Checkout
            </Button>
        </div>
    );
}
 
export default CartSummary;