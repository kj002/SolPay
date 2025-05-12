"use client"

import { useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function PaymentGateway() {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()

  const handlePayment = async () => {
    if (!publicKey) {
      setStatus({ type: "error", message: "Please connect your wallet first." })
      return
    }

    if (!amount || isNaN(Number.parseFloat(amount)) || Number.parseFloat(amount) <= 0) {
      setStatus({ type: "error", message: "Please enter a valid amount." })
      return
    }

    if (!recipient) {
      setStatus({ type: "error", message: "Please enter a recipient address." })
      return
    }

    setIsLoading(true)
    setStatus({ type: "info", message: "Processing payment..." })

    try {
      const recipientPubKey = new PublicKey(recipient)
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: Number.parseFloat(amount) * LAMPORTS_PER_SOL,
        }),
      )

      const { blockhash } = await connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = publicKey

      const signature = await sendTransaction(transaction, connection)
      const confirmation = await connection.confirmTransaction(signature, "confirmed")

      if (confirmation.value.err) {
        throw new Error("Transaction failed")
      }

      setStatus({ type: "success", message: `Payment successful! Transaction signature: ${signature}` })
    } catch (error) {
      setStatus({ type: "error", message: `Payment failed: ${(error as Error).message}` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="relative w-full max-w-md mx-auto border border-gray-800 bg-transparent bg-gradient-to-b from-gray-900/80 to-black/80 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
        <CardHeader className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Make a Payment
            </CardTitle>
            <CardDescription className="text-gray-400">Send SOL to any Solana address securely</CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6 relative z-10">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Label htmlFor="amount" className="text-gray-300">
              Amount (SOL)
            </Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-gray-800/50 border-gray-700/50 text-white pr-12 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-200"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">SOL</div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Label htmlFor="recipient" className="text-gray-300">
              Recipient Address
            </Label>
            <Input
              id="recipient"
              type="text"
              placeholder="Solana address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="bg-gray-800/50 border-gray-700/50 text-white focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-200"
            />
          </motion.div>

          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="relative group">
              <div className="inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-md opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <WalletMultiButton className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 relative" />
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="flex flex-col items-start space-y-4 relative z-10">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <Button
                onClick={handlePayment}
                disabled={!publicKey || isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-medium disabled:opacity-50 transition-all duration-300 relative"
              >
                {isLoading ? (
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Transaction
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex items-center justify-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {publicKey ? "Send Payment" : "Connect Wallet to Pay"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                )}
              </Button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                key={status.type + status.message}
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Alert
                  variant={status.type === "error" ? "destructive" : status.type === "success" ? "default" : "default"}
                  className={`w-full border ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : status.type === "error"
                        ? "border-red-500/20 bg-red-500/10 text-red-400"
                        : "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                  }`}
                >
                  <div className="flex items-start">
                    {status.type === "success" ? (
                      <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                    ) : status.type === "error" ? (
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 text-red-400" />
                    ) : (
                      <Loader2 className="h-5 w-5 mr-2 mt-0.5 text-cyan-400 animate-spin" />
                    )}
                    <div>
                      <AlertTitle
                        className={`font-medium ${
                          status.type === "success"
                            ? "text-green-400"
                            : status.type === "error"
                              ? "text-red-400"
                              : "text-cyan-400"
                        }`}
                      >
                        {status.type === "success" ? "Success" : status.type === "error" ? "Error" : "Processing"}
                      </AlertTitle>
                      <AlertDescription className="text-sm opacity-90 break-all">{status.message}</AlertDescription>
                    </div>
                  </div>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
