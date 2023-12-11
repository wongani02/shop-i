import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Container from "@/components/app_components/Container";
import Gallery from "@/components/app_components/Gallery";
import ProductInfo from "@/components/app_components/ProductInfo";
import ProductList from "@/components/app_components/ProductList";
import { FunctionComponent } from "react";

interface ProductPageProps {
    params: {
        productId: string
    }

}
 
const ProductPage: FunctionComponent<ProductPageProps> = async ({params}) => {

    const product = await getProduct(params.productId)

    const relatedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* gallery */}
                        <Gallery images={product.images}/>
                        {/* info */}
                        <div className="mt-10 px-4 sm:mt:16 sm:px-0 lg:mt-0">
                            <ProductInfo data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related Products" products={relatedProducts}/>
                </div>
            </Container>
        </div>
    );
}
 
export default ProductPage;