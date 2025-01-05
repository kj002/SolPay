import { ShieldCheck, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-purple-400" />,
    title: 'Secure',
    description: "Built on Solana's fast and secure blockchain technology."
  },
  {
    icon: <Zap className="h-12 w-12 text-purple-400" />,
    title: 'Lightning Fast',
    description: 'Process transactions in seconds with low fees.'
  },
  {
    icon: <Globe className="h-12 w-12 text-purple-400" />,
    title: 'Global',
    description: 'Accept payments from anywhere in the world without borders.'
  }
]

export default function Features() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose SolPay?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
