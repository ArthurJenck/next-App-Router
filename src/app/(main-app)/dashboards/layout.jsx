import Link from "next/link"
import React from "react"

const layout = ({ children }) => {
    return (
        <div>
            <nav className="flex gap-x-2">
                <Link className="underline" href="/dashboards/entreprise">
                    Dashboard finance
                </Link>
                <Link className="underline" href="/dashboards/rh">
                    Dashboard RH
                </Link>
            </nav>
            {children}
        </div>
    )
}

export default layout
