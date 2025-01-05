import PaymentGateway from '@/app/components/PaymentGateway'

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Solana Payment Gateway</h1>
        <PaymentGateway />
      </div>
    </div>
  )
}