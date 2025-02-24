import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar01Page from '@/components/navbar-01/navbar-01'

export const metadata: Metadata = {
  title: 'template - next@15 - shadcn@canary - tailwindcss@4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Navbar01Page />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
