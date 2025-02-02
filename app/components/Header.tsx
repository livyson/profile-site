import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          JS
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#video" className="hover:text-blue-400 transition-colors">
              Video
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

