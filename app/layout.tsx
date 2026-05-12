import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormExtract – Extract form data from any website',
  description: 'Browser extension that identifies and extracts structured data from forms across websites into CSV/JSON. Built for sales teams and data researchers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6726000-f274-4cbe-95e6-0b33d3886279"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
