import './globals.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import localFont from 'next/font/local'

const fonts = localFont({
  src: [
    {
      path: '../assets/fonts/helvetica_regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica_bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
