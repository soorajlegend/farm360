"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type UsersColumnForWarehouse = {
  id: string
  name: string
  mobile: string
  allProductsCount: number
  allProductsWeight: string
  createdAt: string
}

export const columns: ColumnDef<UsersColumnForWarehouse>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "allProductsCount",
    header: "No. of product",
  },
  {
    accessorKey: "allProductsWeight",
    header: "Total products's weight",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
