import './globals.css'

export const metadata = {
  title: 'Live Test - Fixed Vercel Config',
  description: 'This is a live test of our AI blog generator with the corrected Vercel configuration.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
