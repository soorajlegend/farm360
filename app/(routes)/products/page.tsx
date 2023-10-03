import React from 'react'
import ProductsClient from './components/client'
import { users, warehouseProducts } from '@/data'
import { ProductsColumnForWarehouse } from './components/columns'

const MainPage = () => {

    const formattedProducts: ProductsColumnForWarehouse[] = warehouseProducts.map(prod => {
        return {
            id: prod?.id,
            name: prod?.name,
            owner: prod.ownerName,
            ownerMobile: prod.ownerMobile,
            weight: prod.weight,
            createdAt: prod?.dateAdded || ""
        }
    })

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto ">
                <ProductsClient
                    title='Products'
                    data={formattedProducts} />
            </div>
        </div>
    )
}

export default MainPage