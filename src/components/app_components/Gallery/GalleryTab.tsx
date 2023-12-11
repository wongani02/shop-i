'use client'

import { Image as ImageType } from "@/types";
import { FunctionComponent } from "react";
import {Tab} from '@headlessui/react'
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
    image: ImageType
}
 
const GalleryTab: FunctionComponent<GalleryTabProps> = ({image}) => {
    return ( 
        <Tab className={'relative flex aspect-square cursor-pointer items-center justify-center bg-white rounded-md'}>
            {({selected})=>(
                <div>
                    <span className="overflow-hidden absolute h-full w-full aspect-square inset-0 rounded-md">
                        <Image
                        fill
                        alt="product image"
                        src={image.url}
                        className="object-cover object-center "
                        />
                    </span>
                    <span className={cn('absolute inset-0 rounded-md ring-2 ring-offset-2', selected ? 'ring-black' : 'ring-transparent')}>
                        
                    </span>
                </div>
            )}
        </Tab>
    );
}
 
export default GalleryTab;