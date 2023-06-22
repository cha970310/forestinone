import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/mainNavbar'
import Footer from './components/footer_'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '숲인원',
  description: '내 손 안의 모든 숲',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
      
    </html>
  )
}
