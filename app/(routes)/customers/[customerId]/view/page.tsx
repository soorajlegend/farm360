import React from 'react'
import ProductsClient from '../../components/client'
import { users, warehouseProducts } from '@/data'
import { Separator } from '@/components/ui/separator'
import WarehouseProductCard from '@/components/product-card'
import { UsersColumnForWarehouse } from '../../components/columns'
import CustomerCard from '@/components/customer-card'

const ViewUserPage = ({ params }: { params: { customerId: string } }) => {


    const formattedUsers: UsersColumnForWarehouse[] = users.filter(user => user.id !== params?.customerId).map(user => {
        const userProducts = warehouseProducts.filter((prod) => prod.ownerId === user.id);

        return {
            id: user?.id,
            name: user?.name,
            mobile: user?.phone,
            allProductsCount: userProducts.length,
            allProductsWeight: userProducts.reduce((sum, prod) => sum + prod.weight, 0),
            createdAt: userProducts[0]?.dateAdded || ""
        }
    })

    const activeUser = users.find(item => item.id === params?.customerId)
    const activeUserProducts = warehouseProducts.filter((prod) => prod.ownerId === activeUser?.id);
    const activeUserData = {
        id: activeUser?.id!,
        name: activeUser?.name!,
        mobile: activeUser?.phone!,
        image: activeUser?.image!,
        address: activeUser?.address!,
        allProductsCount: activeUserProducts.length,
        allProductsWeight: activeUserProducts.reduce((sum, prod) => sum + prod.weight, 0),
        createdAt: activeUserProducts[0]?.dateAdded || ""
    }
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
                <CustomerCard data={activeUserData} />
                <Separator />
                <ProductsClient
                    title='Other Products'
                    enableAddButton={false}
                    enableDescription={false}
                    data={formattedUsers} />
            </div>
        </div>
    )
}

export default ViewUserPage