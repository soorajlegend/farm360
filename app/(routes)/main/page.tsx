"use client"
import { useData } from '@/components/providers/content-provider'
import { requests, users, warehouseProducts } from '@/data'
import { History, MessageCircle, Package, Settings, Store, Users } from 'lucide-react'
import Link from 'next/link'

const MainPage = () => {

    const { user } = useData();

    const cards = [
        {
            title: "Products",
            amount: warehouseProducts.length,
            route: "/products",
            type: [2],
            icon: <Package className='w-8 h-8' />
        },
        {
            title: "My Storage",
            amount: warehouseProducts.length,
            route: "/storage",
            type: [1],
            icon: <Package className='w-8 h-8' />
        },
        {
            title: "Customers",
            amount: users.length,
            route: "/customers",
            type: [2],
            icon: <Users className='w-8 h-8' />
        },
        {
            title: "Warehouses",
            amount: users.length,
            route: "/warehouses",
            type: [0],
            icon: <Store className='w-8 h-8' />
        },
        // {
        //     title: "Tools",
        //     amount: users.length,
        //     route: "/borrow",
        //     type: [1],
        //     icon: <Settings className='w-8 h-8' />
        // },
        {
            title: "Requests",
            amount: requests.filter((req) => req.status === "read").length,
            route: "/requests",
            type: [2,3],
            icon: <MessageCircle className='w-8 h-8' />
        },
        {
            title: "Requests",
            amount: requests.filter((req) => req.status === "read").length,
            route: "/user-requests",
            type: [1],
            icon: <MessageCircle className='w-8 h-8' />
        },
        {
            title: "History",
            amount: requests.filter((req) => req.status === "unread").length,
            route: "/history",
            type: [0],
            icon: <History className='w-8 h-8' />
        },
    ]


    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    cards
                    .filter((item) => item.type.includes(0) || item.type.includes(user?.userType || 0))
                    .map((card, i) => (
                        <Link
                            key={i}
                            href={card.route}
                            className='relative overflow-hidden  w-full rounded-xl shadow-xl h-60 border border-zinc-100/70 flex gap-3 p-5 items-center'
                        >
                            <div className="flex flex-col items-start gap-2 text-zinc-600" >
                                {card.icon}
                                <h1 className="text-2xl font-semibold ">
                                    {card.title}
                                </h1>
                            </div>
                            <h1 className=' text-white font-bold text-6xl w-full text-end px-5'>
                                {card.amount}
                            </h1>
                            <div className="absolute bg-gradient-to-t from-teal-900 to-teal-500  w-full h-full skew-x-[-45deg] translate-x-[50%] -z-10" />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage