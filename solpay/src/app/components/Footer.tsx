import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-purple-800 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2023 SolPay. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-purple-300 transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-purple-300 transition duration-300">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-purple-300 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}