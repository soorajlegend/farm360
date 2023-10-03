"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname();

    const userType = "warehouse"

    const navigation = [
        {
            title: "Overview",
            route: "/main",
            type: ["general"],
            active: pathname === '/main'
        },
        {
            title: "Products",
            route: "/products",
            type: ["warehouse"],
            active: pathname === '/products'
        },
        {
            title: "My Storage",
            route: "/storage",
            type: ["user"],
            active: pathname === '/storage'
        },
        {
            title: "Tools",
            route: "/tools",
            type: ["lender"],
            active: pathname === '/tools'
        },
        {
            title: "Customers",
            route: "/customers",
            type: ["warehouse", "lender"],
            active: pathname === '/customers'
        },
        {
            title: "Warehouses",
            route: "/warehouses",
            type: ["user"],
            active: pathname === '/warehouses'
        },
        {
            title: "Requests",
            route: "/requests",
            type: ["warehouse", "lender"],
            active: pathname === '/requests'
        },
        {
            title: "History",
            route: "/history",
            type: ["general"],
            active: pathname === '/history'
        },
    ]

    return (
        <div className='flex py-2 top-0 px-4 fixed w-full border-b h-screen md:h-16 md:items-center bg-white z-50'>
            <div className="w-full  max-w-7xl mx-auto flex flex-col md:flex-row gap-3">
                {
                    navigation
                        .filter((nav) => nav.type.includes("general") || nav.type.includes(userType))
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