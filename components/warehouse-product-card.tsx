import { WarehouseProduct } from '@/types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const WarehouseProductCard = ({ data }: { data?: WarehouseProduct }) => {

    if (!data) {
        <div>product not found</div>
    }
    return (
        <div className='flex flex-col gap-5'>
            <Avatar className='h-20 w-20 relative z-20'>
                <AvatarImage
                    src="https://r.search.yahoo.com/_ylt=Awr4_hTT7xtlKjYe5GyJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJkNzBmZTI1NDA4M2Q1ZjJmMGY5YTY4YTI5YjhlNjRmBGdwb3MDNjQEaXQDYmluZw--/RV=2/RE=1696358484/RO=11/RU=http%3a%2f%2fwww.clker.com%2fclipart-male-avatar.html/RK=2/RS=Sbfovzla4lQ1.8NabRfF3nHnSNM-"
                    className='bg-gray-200'
                />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <p className='font-semibold text-xl'>{data?.ownerName}</p>
                    <p className='text-sm'>{data?.ownerMobile}</p>
                </div>
            </div>

            <div className="flex gap-x-2 items-end">
                <h1 className='text-2xl font-bold'>{data?.name}</h1>
                <span className='text-sm font-semibold py-1'>({data?.weight}kg)</span>
            </div>

            <div className="flex gap-x-2 items-end">
                <h1 className='text-xl font-bold'>Address:</h1>
                <span className='text-sm font-semibold py-1 max-w-lg'>{data?.ownerAddress}</span>
            </div>
        </div>
    )
}

export default WarehouseProductCard