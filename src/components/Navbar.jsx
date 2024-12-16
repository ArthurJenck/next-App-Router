"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="flex gap-x-2 mb-6">
            <Link className="underline" href="/">
                Accueil
            </Link>
            <Link className="underline" href="/blog">
                Blog
            </Link>
            <Link className="underline" href="/dashboards">
                Dashboards
            </Link>
            <Link
                className={`underline ${
                    pathname === "/contact" && "bg-red-600"
                }`}
                href="/contact"
            >
                Contact
            </Link>
        </nav>
    )
}
