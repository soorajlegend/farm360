"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useData } from './providers/content-provider';

const Navbar = () => {

    const pathname = usePathname();

    const { user } = useData();


    const navigation = [
        {
            title: "Overview",
            route: "/main",
            type: [0],
            active: pathname === '/main'
        },
        {
            title: "Products",
            route: "/products",
            type: [2],
            active: pathname === '/products'
        },
        {
            title: "My Storage",
            route: "/storage",
            type: [1],
            active: pathname === '/storage'
        },
        {
            title: "Tools",
            route: "/tools",
            type: [3],
            active: pathname === '/tools'
        },
        {
            title: "Customers",
            route: "/customers",
            type: [2, 3],
            active: pathname === '/customers'
        },
        {
            title: "Warehouses",
            route: "/warehouses",
            type: [1],
            active: pathname === '/warehouses'
        },
        // {
        //     title: "Borrow Tools",
        //     route: "/borrow",
        //     type: [1],
        //     active: pathname === '/warehouses'
        // },
        {
            title: "Requests",
            route: "/requests",
            type: [2,3],
            active: pathname === '/requests'
        },
        {
            title: "Requests",
            route: "/user-requests",
            type: [1],
            active: pathname === '/requests'
        },
        {
            title: "History",
            route: "/history",
            type: [0],
            active: pathname === '/history'
        },
    ]

    return (
        <div className='flex py-2 top-0 px-4 fixed w-full border-b h-screen md:h-16 md:items-center bg-white z-50'>
            <div className="w-full  max-w-7xl mx-auto flex flex-col md:flex-row gap-3">
                {
                    navigation
                        .filter((nav) => nav.type.includes(0) || nav.type.includes(user?.userType || 0))
                        .map((nav, i) => (
                            <Link
                                href={nav.route}
                                key={i}
                                className={cn(
                                    'px-3 hover:bg-teal-700 hover:text-white rounded-full py-2 w-full md:w-auto transition',
                                    nav.active && "rounded-none text-teal-900 border-b-2 border-teal-800/80 hover:bg-transparent hover:text-teal-800"
                                )}
                            >
                                {nav.title}
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Navbar