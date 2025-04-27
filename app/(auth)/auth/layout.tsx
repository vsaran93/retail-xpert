"use client"
import '../../globals.css'

function Layout({ children }: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Layout;