import { FunctionComponent } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="text-black text-xs text-center">
                    &copy; 2023 Fakestorename, Inc. All rights reserved.  
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;