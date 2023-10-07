import React from 'react'
import ProductsClient from '../../components/client'
import { userProducts } from '@/data'
import { Separator } from '@/components/ui/separator'
import ProductCard from '@/components/product-card'

const ViewProductPage = ({ params }: { params: { productId: string } }) => {

    
    const activeProduct = userProducts.find(item => item.id === params?.productId )

    const otherProducts = userProducts.filter(item => item.id !== params?.productId);
    
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
                <ProductCard userProduct={activeProduct} />
                <Separator />
                <ProductsClient 
                title='Other Products'  
                enableAddButton={false}
                enableDescription={false}
                data={otherProducts}/>
            </div>
        </div>
    )
}

export default ViewProductPage