import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SolPay
        </Link>
        <div>
          <Link href="/docs" className="mr-4 hover:text-purple-300 transition duration-300">
            Docs
          </Link>
          <Link href="/pricing" className="hover:text-purple-300 transition duration-300">
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  )
}
