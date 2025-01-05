'use client'

import { useState } from 'react'
import Header from './Header'
import PaymentGateway from './PaymentGateway'
import Features from './Features'
import Footer from './Footer'

export default function LandingPage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Solana Payment Gateway</h1>
          <p className="text-xl mb-8">Accept Solana and SPL tokens on your website with ease</p>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {showDemo ? 'Hide Demo' : 'Try Demo'}
          </button>
        </section>
        {showDemo && <PaymentGateway />}
        <Features />
      </main>
      <Footer />
    </div>
  )
}
