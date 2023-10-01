'use client'

import { useParams, useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { Copy, Edit, ExternalLink, MoreHorizontal, Plus, Trash, View } from "lucide-react"
import { useState } from "react"
import axios from "axios"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { UsersColumnForWarehouse } from "./columns"

interface CellActionProps {
    data: UsersColumnForWarehouse
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {

    const router = useRouter();
    const params = useParams();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="ا-8 "
                    >
                        <span className="sr-only">open Menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => router.push(`/users/${data.id}`)}>
                        <View className="mr-2 h-4 w-4" />
                        View All
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/save/${data.id}`)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Save
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/withdraw/${data.id}`)}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Withdraw
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
} 