import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulMarket',
  description: 'MindfulMarket offers personalized mental health and productivity resources tailored for e-commerce entrepreneurs to improve their well-being and optimize their business operations.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulMarket</h1>
      <p className="mt-4 text-lg">MindfulMarket offers personalized mental health and productivity resources tailored for e-commerce entrepreneurs to improve their well-being and optimize their business operations.</p>
    </main>
  )
}
