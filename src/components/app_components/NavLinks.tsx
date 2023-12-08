'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface NavLinksProps {
    data: Category[]
}
 
const NavLinks: FunctionComponent<NavLinksProps> = ({data}) => {

    const pathName = usePathname();

    const routes = data.map((route)=>({
        href: `categories/${route.id}`,
        label: route.name,
        active: pathName === `categories/${route.id}`
    }))
    return ( 
        <nav className="mx-6 items-center flex space-x-4 lg:space-x-6">
            {routes.map((route)=>(
                <Link 
                key={route.href} 
                href={route.href}
                className={cn('text-sm font-medium transition-colors hover:text-black', route.active ? 'text-black': 'text-neutral-500')}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}
 
export default NavLinks;