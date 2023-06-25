import './globals.css'

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alan Compay',
  description: 'Porfolio ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>


        <Main className=''>
          {children}
        </Main>
        
        

        <footer>
          <Footer/>
        </footer>
        </body>
    </html>
  )
}
