'use client'

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { UsersColumnForWarehouse, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface UsersTableClient {
    data: UsersColumnForWarehouse[]
}

const UsersClient: React.FC<UsersTableClient> = ({ data }) => {

    const router = useRouter();

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <Heading
                    title={`Customers (${data?.length})`}
                    description="Manage Customers of your store"
                />
                <Button onClick={() => router.push(`/product/new`)} >
                    <Plus className="mr-2 h-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default UsersClient