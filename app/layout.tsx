import { useEffect, useState } from 'react';

import type { Metadata } from 'next'
import Header from '@/app/header/page';
import Menu from '@/app/menu/page';
import Footer from '@/app/footer/page';


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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" />
      </head>

      <body>
        {/* <Script
          id="custom-script"
          strategy="lazyOnload" // Chỉ chạy sau khi trang và tất cả tài nguyên đã tải
        >
          {`
          window.addEventListener('scroll', ()=> {
            const currentScrollY = window.scrollY;
            const menu = document.querySelector('#menu');

            alert(currentScrollY);
            if (currentScrollY > lastScrollY) {
              menu?.classList.add('hidden');
            } else if (currentScrollY < lastScrollY) {
              menu?.classList.add('remove');
            }
          });
        `}
        </Script> */}

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
