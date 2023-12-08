import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/app_components/Billboard";
import Container from "@/components/app_components/Container";
import ProductList from "@/components/app_components/ProductList";
import { FunctionComponent } from "react";

export const revalidate = 0;

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = async () => {

    const billboards = await getBillboards('8462bfef-bf12-47e0-b2a9-051e8e400d9c');

    const products = await getProducts({isFeatured: true});

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards}/>
            
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList 
                    products={products}
                    title="Expore Our Featured Products" />
                </div>
            </div>
        </Container>
    );
}
 
export default HomePage;