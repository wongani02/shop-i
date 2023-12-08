import { FunctionComponent } from "react";

interface EmptyProps {
    
}
 
const Empty: FunctionComponent<EmptyProps> = () => {
    return ( 
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
            No results found
        </div>
    );
}
 
export default Empty;