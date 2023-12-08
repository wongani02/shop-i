import { cn } from "@/lib/utils";
import { FunctionComponent, MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string
    icon: React.ReactElement
    
}
 
const IconButton: FunctionComponent<IconButtonProps> = ({onClick, className, icon}) => {
    return ( 
        <button 
        onClick={onClick}
        className={cn(`rounded-full flex items-center justify-center bg-white border shadow-md p-2 transition hover:scale-100`, className)}
        >
            {icon}
        </button>
    );
}
 
export default IconButton;