"use client"
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import '../globals.css'
import { Button } from "@/components/ui/button"
import { LayoutDashboard, UserRound } from "lucide-react"
import Link from 'next/link';


function Layout({ children }: { children: React.ReactNode }) {
  const [openSiderBar, setOpenSideBar] = useState(false);
  
  const toggleSideBar = () => {
    setOpenSideBar(!openSiderBar)
  };
 
  return (
    <html lang="en">
        <body>
        <SidebarProvider defaultOpen={false} open={openSiderBar}>
          <div className="h-screen flex flex-col w-full">
            <header className="bg-blue-500 p-2" style={{ paddingLeft: openSiderBar ? '16rem' : '3rem' }}> 
              <div className='flex justify-between'>
                  <div className='flex items-center'>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button onClick={toggleSideBar} variant="ghost" className="text-white">
                                <LayoutDashboard />
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="text-white ml-4">
                          Retail-Xpert
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                  <div className='flex items-center'>
                    <Link className='flex items-center text-white gap-2 mt-2' href="/auth/login"><UserRound /><span>Login</span></Link>
                  </div>
              </div>  
              
            </header>
            <div className="flex flex-1">
              <div className={`${openSiderBar ? 'w-64' : 'w-3'} transition-all duration-300 overflow-auto`}>
                <AppSidebar />    
              </div>
              <main className={`flex-1 overflow-auto p-4 bg-gray-50 transition-all duration-300 ${
                    openSiderBar ? '0' : 'ml-10'
                  }`}>
                  {children}
              </main> 
            </div>
          
          </div>
          </SidebarProvider>
        </body>
    </html>
  )
}

export default Layout;