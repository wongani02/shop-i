import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/app_components/Billboard";
import Container from "@/components/app_components/Container";
import { FunctionComponent } from "react";
import Filter from "./components/Filter";
import Empty from "@/components/custom_ui/Empty";
import ProductCard from "@/components/app_components/ProductCard";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0

interface CategorySinglePageProps {
    params: {
        categoryId: string
    }
    searchParams: {
        sizeId: string
        colorId: string
    }
}
 
const CategorySinglePage: FunctionComponent<CategorySinglePageProps> = async ({params, searchParams}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId)

    return ( 
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard}/>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Mobile filters */}
                        <MobileFilters sizes={sizes} colors={colors}/>

                        {/* Desktop filters */}
                        <div className="hidden lg:block">
                            <Filter
                            valueKey={'sizeId'}
                            name='Sizes'
                            data={sizes}
                            />
                            <Filter
                            valueKey={'colorId'}
                            name='Colors'
                            data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <Empty/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product)=>(
                                    <ProductCard key={product.id} product={product}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default CategorySinglePage;