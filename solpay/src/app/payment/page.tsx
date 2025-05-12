"use client"

import { motion } from "framer-motion"
import PaymentGateway from "@/app/components/PaymentGateway"
import { BackgroundElements } from "@/app/components/background-elements"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements />

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="sticky top-0 z-50">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-gray-800/80 backdrop-blur-sm bg-black/30 w-full"
          >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center group">
                <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ArrowLeft className="h-5 w-5 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl font-bold"
                >
                  <span className="text-cyan-gradient bg-clip-text text-transparent">
                    SolPay
                  </span>
                </motion.div>
              </Link>
            </div>
          </motion.header>
        </div>

        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 mb-4">
              Secure Payment Gateway
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Send SOL Payments
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience fast, secure, and low-fee transactions on the Solana blockchain
            </p>
          </motion.div>

          {/* Payment Gateway */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/5 animate-[spin_60s_linear_infinite] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/5 animate-[spin_40s_linear_infinite_reverse] opacity-30" />

            <PaymentGateway />
          </div>
        </div>
      </div>
    </div>
  )
}
