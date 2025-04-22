import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Asterisk, Box, Codesandbox, CornerDownLeft, Delete, Diff, Percent, Plus, Tag, CreditCard, Banknote, Ticket } from "lucide-react"
import Lines from "./line"
import { Button } from "@/components/ui/button"

const Transaction = () => {
    console.log("testing trans")
    return (
        <>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <span>Lines</span>
                <div>
                    <Lines />
                </div>
                <div className="grid grid-cols-3 gap-4 items-end min-h-[250px]">
                    <div className="flex flex-col">
                        <Card className="min-h-[200px] overflow-auto flex flex-col items-center justify-center bg-muted hover:bg-muted/70 cursor-pointer">
                            <CardContent className="flex flex-col items-center justify-center text-md gap-2 font-semibold">
                                <Plus />
                                <p>Add Customer</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-2 flex flex-col">
                        <Card id="summaryCard" className=" overflow-auto min-h-[200px]">
                            <CardContent className="grid grid-cols-2 gap-4 pl-4 pr-4 text-sm font-medium">
                                {/* Column 1 */}
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <span>LINES</span>
                                        <span>1</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>DISCOUNT</span>
                                        <span>23.00</span>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <span>SUBTOTAL</span>
                                        <span>23.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>TAX</span>
                                        <span>1.23</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>PAYMENT</span>
                                        <span>$1212.00</span>
                                    </div>
                                </div>
                                <div className="col-span-2 border-t py-3 text-base font-semibold flex justify-between">
                                    <span>Amount Due</span>
                                    <span>2300.00</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="flex flex-col justify-between h-full gap-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="search">Search or Enter Quantity</Label>
                            <Input type="text" id="search" placeholder="" />
                            <div className="grid grid-cols-4 gap-2 mt-5">
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">1</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">2</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">3</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 p-0">
                                        <Delete size={21}/>
                                    </CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">4</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">5</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">6</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 p-0">
                                        <Diff size={21}/>
                                    </CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">7</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">8</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">9</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 p-0">
                                        <Asterisk size={21}/>
                                    </CardContent></Card></div>
                                    <div className="col-span-2"><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">0</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">.</CardContent></Card></div>
                                    <div><Card className="rounded-md hover:bg-muted/70 cursor-pointer"><CardContent className="flex items-center justify-center h-2 text-xl font-semibold">abc</CardContent></Card></div>
                            </div>
                                <div className="grid">
                                <Card className="rounded-md bg-sky-500/75 hover:bg-sky-700 cursor-pointer"><CardContent className="flex items-center justify-center h-2 p-0">
                                        <CornerDownLeft size={21} color="white" />
                                    </CardContent></Card>
                                </div>
                        </div>
                        <div id="pay-options" className="grid grid-cols-3 gap-2 mt-auto">
                            <Card className="bg-sky-500/75 rounded-sm  hover:bg-sky-700 cursor-pointer"><CardContent className="flex items-center justify-center"><CreditCard color="white" /></CardContent></Card>
                            <Card className="bg-sky-500/75 rounded-sm  hover:bg-sky-700 cursor-pointer"><CardContent className="flex items-center justify-center"><Banknote color="white"/></CardContent></Card>
                            <Card className="bg-sky-500/75 rounded-sm  hover:bg-sky-700 cursor-pointer"><CardContent className="flex items-center justify-center"><Ticket color="white"/></CardContent></Card>
                        </div>
                    </div>
                </div>
                <div>
                    <Card className="w-full shadow-sm">
                        <CardContent className="flex flex-col gap-3 p-4">
                        <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-md bg-muted hover:bg-muted/70 cursor-pointer transition text-sm font-medium w-full">
                            <Codesandbox size={22} />
                            <span>Actions</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-md bg-muted hover:bg-muted/70 cursor-pointer transition text-sm font-medium w-full">
                            <Tag size={22} />
                            <span>Discount</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-md bg-muted hover:bg-muted/70 cursor-pointer transition text-sm font-medium w-full">
                            <Box size={22} />
                            <span>Product</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-md bg-muted hover:bg-muted/70 cursor-pointer transition text-sm font-medium w-full">
                            <Percent size={22} />
                            <span>VAT</span>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}

export default Transaction