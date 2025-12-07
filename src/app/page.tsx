import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WiseChain',
  description: 'WiseChain is a no-code/low-code platform that leverages Web3 technology to create customizable health and wellness apps with blockchain transparency for businesses seeking to improve employee wellbeing without tech barriers.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">WiseChain</h1>
      <p className="mt-4 text-lg">WiseChain is a no-code/low-code platform that leverages Web3 technology to create customizable health and wellness apps with blockchain transparency for businesses seeking to improve employee wellbeing without tech barriers.</p>
    </main>
  )
}
