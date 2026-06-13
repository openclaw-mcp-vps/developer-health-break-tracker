import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevBreak — Track Coding Breaks to Prevent RSI & Burnout',
  description: 'Smart break reminders for developers. Monitor coding activity, track posture breaks, eye rest, and generate health reports. Prevent RSI and burnout.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dc6f6523-1876-4a99-94a4-f8e4e397f586"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
