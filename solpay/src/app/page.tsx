import { Button } from "@/app/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-gradient bg-clip-text text-transparent">
            SolPay
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Button variant="outline" className="border-gray-800 text-white">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Enterprise Payment Gateway for Solana
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Accept Solana and SPL tokens with our secure, scalable, and developer-friendly payment solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/payment"> 
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-700">
                Try Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan">Why Choose SolPay?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
            <Shield className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Security</h3>
            <p className="text-gray-400">
              Bank-grade security with multi-sig support and automated risk management
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
            <Zap className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
            <p className="text-gray-400">
              Process thousands of transactions per second with minimal latency
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
            <Globe className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Global Coverage</h3>
            <p className="text-gray-400">
              Accept payments from anywhere in the world with multi-currency support
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">
            Join the thousands of businesses already using SolPay to process their Solana payments
          </p>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-700">
            Create Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-cyan-gradient bg-clip-text text-transparent mb-4">
                SolPay
              </div>
              <p className="text-gray-400">
                Enterprise-grade payment solutions for Solana
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

