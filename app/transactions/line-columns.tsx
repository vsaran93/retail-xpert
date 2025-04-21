"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: string
  item: string
  quantity: number
  total: number
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "total",
    header: "Total (Without Tax)",
  },
]
