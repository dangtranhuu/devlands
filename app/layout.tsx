import type { Metadata } from 'next'
import Header from './header/page';
import Menu from './menu/page';
import Footer from './footer/page';


import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/main.css';
import '@/styles/mode.css';


export const metadata: Metadata = {
  title: 'DaviTek',
  description: 'DaviLands Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link crossOrigin='anonymous' rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" />
      </head>

      <body>
        <Header />

        <div className="main">
          <Menu />
          <div className="container">
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  )
}
