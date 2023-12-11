import { Product } from "@/types";
import { FunctionComponent } from "react";
import Empty from "../custom_ui/Empty";
import ProductCard from "./ProductCard";

interface ProductListProps {
    title: string
    products: Product[]
}
 
const ProductList: FunctionComponent<ProductListProps> = ({title, products}) => {
    return ( 
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {products.length === 0 && <Empty/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))} 
            </div>
        </div>
     );
}
 
export default ProductList;