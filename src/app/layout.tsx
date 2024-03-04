import { type Metadata } from 'next'

import { Providers } from './providers'
import { Layout } from '../components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Abbas - Software engineer based in Dubai',
    default: 'Abbas - Software engineer based in Dubai',
  },
  description:
    'I’m Abbas. I live in Dubai, where I design digital solutions for Muslims.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
