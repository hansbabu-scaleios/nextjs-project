import './globals.css'

export const metadata = {
  title: 'Scaleiosdevops',
  description: 'Sample NextJs App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
