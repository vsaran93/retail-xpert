
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (<>
  <div className="grid grid-cols-3 gap-4">
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-sm border border-border">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-muted-foreground">No. of Customers</span>
              <span className="text-2xl font-bold text-foreground">1,110</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-border">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-muted-foreground">No. of Products</span>
              <span className="text-2xl font-bold text-foreground">1,110</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-border">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-muted-foreground">No. of Employees</span>
              <span className="text-2xl font-bold text-foreground">110</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-border">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-muted-foreground">No. of Transactions</span>
              <span className="text-2xl font-bold text-foreground">120</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-3 rounded-lg shadow-sm bg-background border border-border">
        <CardContent>
          <div className="mb-6">
            <h4 className="text-xl font-bold">Quick Actions</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Action 1 */}
            <div className="bg-muted rounded-lg p-0 h-[100px] hover:bg-muted/70 transition-colors duration-200 cursor-pointer shadow-sm">
              <Button
                variant="outline"
                className="w-full h-full text-base font-medium justify-start px-6"
              >
                Add New Product
              </Button>
            </div>

            {/* Action 2 */}
            <div className="bg-muted rounded-lg p-0 h-[100px] hover:bg-muted/70 transition-colors duration-200 cursor-pointer shadow-sm">
              <Button
                variant="outline"
                className="w-full h-full text-base font-medium justify-start px-6"
              >
                Add Stock Entry
              </Button>
            </div>

            {/* Action 3 */}
            <div className="bg-muted rounded-lg p-0 h-[100px] hover:bg-muted/70 transition-colors duration-200 cursor-pointer shadow-sm">
              <Button
                variant="outline"
                className="w-full h-full text-base font-medium justify-start px-6"
              >
                View Full Reports
              </Button>
            </div>

            {/* Action 4 */}
            <div className="bg-muted rounded-lg p-0 h-[100px] hover:bg-muted/70 transition-colors duration-200 cursor-pointer shadow-sm">
              <Button
                variant="outline"
                className="w-full h-full text-base font-medium justify-center px-6 text-left whitespace-normal break-words"
              >
                Create Invoice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      
    </div>
    <div className="col-span-2">
      <Card>
      <CardContent>
          {/* Column Headings Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-xl font-bold">Sales Overview</h4>
            </div>
            <div>
              <h4 className="text-xl font-bold">Products & Inventory</h4>
            </div>
          </div>

          {/* Charts Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart 1 */}
            <div>
              <h5 className="text-sm text-muted-foreground mb-1">Top Sales</h5>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center">
                Chart 1 (e.g. Sales)
              </div>
            </div>

            {/* Chart 2 */}
            <div>
              <h5 className="text-sm text-muted-foreground mb-1">Top Selling 5 products</h5>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center">
                Chart 2 (e.g. Signups)
              </div>
            </div>

            {/* Chart 3 */}
            <div>
              <h5 className="text-sm text-muted-foreground mb-1">No Of Transactions</h5>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center">
                Chart 3 (e.g. Revenue)
              </div>
            </div>

            {/* Chart 4 */}
            <div>
              <h5 className="text-sm text-muted-foreground mb-1">Low Stocks Alert</h5>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center">
                Chart 4 (e.g. Engagement)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  </>);
}
