'use client'

import { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from 'lucide-react'

export default function PaymentGateway() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()

  const handlePayment = async () => {
    if (!publicKey) {
      setStatus({ type: 'error', message: 'Please connect your wallet first.' })
      return
    }

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setStatus({ type: 'error', message: 'Please enter a valid amount.' })
      return
    }

    if (!recipient) {
      setStatus({ type: 'error', message: 'Please enter a recipient address.' })
      return
    }

    setIsLoading(true)
    setStatus({ type: 'info', message: 'Processing payment...' })

    try {
      const recipientPubKey = new PublicKey(recipient)
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL
        })
      )

      const { blockhash } = await connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = publicKey

      const signature = await sendTransaction(transaction, connection)
      const confirmation = await connection.confirmTransaction(signature, 'confirmed')

      if (confirmation.value.err) {
        throw new Error('Transaction failed')
      }

      setStatus({ type: 'success', message: `Payment successful! Transaction signature: ${signature}` })
    } catch (error) {
      setStatus({ type: 'error', message: `Payment failed: ${(error as Error).message}` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900 text-white">
      <CardHeader>
        <CardTitle>Make a Payment</CardTitle>
        <CardDescription>Send SOL to any Solana address</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (SOL)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            type="text"
            placeholder="Solana address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="pt-2">
          <WalletMultiButton className="w-full bg-cyan-gradient hover:opacity-90" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button 
          onClick={handlePayment} 
          disabled={!publicKey || isLoading} 
          className="w-full bg-cyan-gradient hover:opacity-90 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
          ) : (
            'Pay'
          )}
        </Button>
        {status && (
          <Alert variant={status.type === 'error' ? 'destructive' : 'default'} className="w-full">
            <AlertTitle>{status.type === 'success' ? 'Success' : status.type === 'error' ? 'Error' : 'Info'}</AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}

