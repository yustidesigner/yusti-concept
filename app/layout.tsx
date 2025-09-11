import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const montserratFont = Montserrat({
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${montserratFont.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
