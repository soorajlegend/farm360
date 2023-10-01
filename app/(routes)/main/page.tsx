import { requests, users, warehouseProducts } from '@/data'
import { History, MessageCircle, Package, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MainPage = () => {

    const cards = [
        {
            title: "Products",
            amount: warehouseProducts.length,
            route: "/products",
            icon: <Package className='w-8 h-8' />
        },
        {
            title: "Customers",
            amount: users.length,
            route: "/customers",
            icon: <Users className='w-8 h-8' />
        },
        {
            title: "Requests",
            amount: requests.filter((req) => req.status === "read").length,
            route: "/requests",
            icon: <MessageCircle className='w-8 h-8' />
        },
        {
            title: "History",
            amount: requests.filter((req) => req.status === "unread").length,
            route: "/history",
            icon: <History className='w-8 h-8' />
        },
    ]


    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    cards.map((card, i) => (
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