import { Transaction, columns } from "./line-columns"
import { DataTable } from "./line-data-table"

async function getData(): Promise<Transaction[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      total: 10.20,
      item: "Ice Cream",
      quantity: 10,
    },
    {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
      {
        id: "728ed52f2333",
        total: 10.20,
        item: "Ice Cream",
        quantity: 10,
      },
    // ...
  ]
}

export default async function Lines() {
  const data = await getData()

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
