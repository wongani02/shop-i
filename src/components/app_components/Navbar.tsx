import { FunctionComponent } from "react";
import Container from "./Container";
import Link from "next/link";
import NavLinks from "./NavLinks";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";

interface NavbarProps {

}
 
const Navbar: FunctionComponent<NavbarProps> = async () => {

    const categories = await getCategories();

    return ( 
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href={'/'} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">
                            STORE
                        </p>
                    </Link>
                    <NavLinks data={categories}/>
                    <NavbarActions/>
                </div>

            </Container>
        </div>
    );
}
 
export default Navbar;