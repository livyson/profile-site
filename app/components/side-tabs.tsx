"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { name: "Home", href: "/" },
  { name: "Apresentação", href: "/#video" },
  { name: "Contato", href: "/#contact" },
]

export function SideTabs() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 z-50 w-full sm:left-4 sm:top-16 sm:w-auto">
      <nav className="flex justify-center sm:flex-col sm:space-y-2 bg-black/50 sm:bg-transparent p-2 sm:p-0">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn(
              "px-3 py-2 sm:px-2 sm:py-1 text-sm sm:text-xs font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white mx-1 sm:mx-0",
              pathname === tab.href && "bg-gray-900 text-white",
            )}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

