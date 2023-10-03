import React from 'react'
import UsersClient from './components/client'
import { users, warehouseProducts } from '@/data'
import { UsersColumnForWarehouse } from './components/columns'

const MainPage = () => {

    const formattedUsers: UsersColumnForWarehouse[] = users.map(user => {
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

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto ">
                <UsersClient
                title='Customers'
                data={formattedUsers}/>
            </div>
        </div>
    )
}

export default MainPage