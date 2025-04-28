"use client"

import { X, Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"


const Header = () => {
 

    return (
        <header className="relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    {/* Logo */}
                    <div className="flex justify-start min-w-[120px] flex-1">
                        <Link href="/" className="flex items-center">
                            <div className="text-lg md:text-xl font-bold flex items-center">
                                <span className="text-white">Sui zkMCP</span>
                            </div>
                        </Link>
                    </div>

                  
                    {/* Desktop navigation */}
                    <nav className=" flex space-x-10">
                        <Link href="/account" className="text-blue-100 hover:text-white font-medium">
                            Account
                        </Link> 
                        <a href="#" className="text-blue-100 hover:text-white font-medium">
                            GitHub
                        </a>
                    </nav>

                    {/* Desktop CTA */}
                    <div className=" flex items-center justify-end md:flex-1 lg:w-0"> 
                        <a
                            href="#"
                            className="whitespace-nowrap px-5 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
 
        </header>
    )
}

export default Header