
"use client";

import {Button} from "./components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Code,
  Wallet,
  ChevronRight,
  Star,
  CheckCircle,
  Layers,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BackgroundElements } from "@/app/components/background-elements"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const featureVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements />

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-gray-800/80 backdrop-blur-sm bg-black/30 sticky top-0 z-50"
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold"
            >
              <span className="text-cyan-gradient bg-clip-text text-transparent">SolPay</span>
            </motion.div>
            <nav className="hidden md:flex items-center gap-6">
              {/* Documentation and Pricing links removed */}
            </nav>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyan-500/10 animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/10 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/10 animate-[spin_30s_linear_infinite]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan text-sm font-medium border border-cyan-500/20">
                Enterprise-Grade Solana Payments
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              Enterprise Payment Gateway for Solana
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-8"
            >
              Accept Solana and SPL tokens with our secure, scalable, and developer-friendly payment solution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/payment">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 group text-black">
                  Try Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-24 border-t border-gray-800/50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-4 text-white"
          >
            Why Choose <span className="text-cyan">SolPay</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
          >
            Our enterprise solution offers unparalleled security, speed, and reliability for businesses of all sizes
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={featureVariant}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-gray-800/80 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Shield className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade security with multi-sig support and automated risk management</p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </motion.div>

            <motion.div
              variants={featureVariant}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-gray-800/80 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Zap className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
              <p className="text-gray-400">Process thousands of transactions per second with minimal latency</p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </motion.div>

            <motion.div
              variants={featureVariant}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-gray-800/80 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Globe className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Global Coverage</h3>
              <p className="text-gray-400">Accept payments from anywhere in the world with multi-currency support</p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-24 border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              How <span className="text-cyan">SolPay</span> Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our streamlined process makes accepting Solana payments simple and efficient
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            <motion.div variants={featureVariant} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Code className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">1. Integrate</h3>
              <p className="text-gray-400">
                Simple API integration with just a few lines of code. Support for all major frameworks.
              </p>
            </motion.div>

            <motion.div variants={featureVariant} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Wallet className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">2. Transact</h3>
              <p className="text-gray-400">
                Customers pay with any Solana wallet. Transactions are verified instantly.
              </p>
            </motion.div>

            <motion.div variants={featureVariant} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <CheckCircle className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">3. Settle</h3>
              <p className="text-gray-400">
                Funds are settled to your wallet or account. Comprehensive reporting included.
              </p>
            </motion.div>
          </motion.div>
        </section>


        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-24 border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Trusted by businesses around the world</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "SolPay has transformed how we handle payments. The integration was seamless, and our customers love the
                speed and security."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 mr-3"></div>
                <div>
                  <p className="font-medium text-white">Jane Smith</p>
                  <p className="text-sm text-gray-400">CTO, TechCorp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The reliability and security of SolPay have been game-changers for our business. We've seen a 30%
                increase in conversion rates."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 mr-3"></div>
                <div>
                  <p className="font-medium text-white">Mark Johnson</p>
                  <p className="text-sm text-gray-400">Founder, DeFi Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-24 border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about SolPay</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">How secure is SolPay?</h3>
              <p className="text-gray-400">
                SolPay uses bank-grade security protocols, multi-signature wallets, and real-time fraud detection to
                ensure the highest level of security for all transactions.
              </p>
            </motion.div>

            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">What currencies are supported?</h3>
              <p className="text-gray-400">
                SolPay supports SOL, USDC, and all major SPL tokens. Custom token integration is also available for
                enterprise clients.
              </p>
            </motion.div>

            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">How long does integration take?</h3>
              <p className="text-gray-400">
                Most businesses can integrate SolPay in less than a day. Our comprehensive documentation and support
                team are available to help with any questions.
              </p>
            </motion.div>

            <motion.div
              variants={featureVariant}
              className="p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900/80 to-black/80"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">What are the transaction fees?</h3>
              <p className="text-gray-400">
                SolPay offers competitive transaction fees starting at 0.5%. Volume discounts are available for
                high-volume merchants.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 bg-black/80">
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
                <h4 className="font-semibold mb-4 text-cyan">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      API Reference
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-cyan">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
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
    </div>
  )
}










    // </div>

