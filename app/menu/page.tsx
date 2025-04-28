'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/menu.css';

export default function Menu() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const mode = localStorage.getItem('modeByThean');
    if (mode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    document.body.addEventListener('scroll', handleScroll)
    return () => document.body.removeEventListener('scroll', handleScroll);

  }, []);

  const handleScroll = () => {
    const menu = document.querySelector("#menu ul");
    const scrollPosition = document.body.scrollTop; // Lấy vị trí cuộn của body
    console.log('scroll body', scrollPosition);
    const modeDiv = document.querySelector('.mode-mobile');

    if (!menu)
      return;
    if (scrollPosition > lastScrollY) {
      // Cuộn xuống -> ẩn menu
      menu.classList.add('hidden');
      if (modeDiv)
        modeDiv.classList.add('mode');
    } else {
      // Cuộn lên -> hiện menu
      menu.classList.remove('hidden');
      if (modeDiv)
        modeDiv.classList.remove('mode');
    }

    // Cập nhật lastScrollY để so sánh trong lần cuộn tiếp theo
    lastScrollY = scrollPosition;
  }

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('modeByThean', newMode ? 'dark' : 'light');

    // Phát ra 1 sự kiện tùy chỉnh
    window.dispatchEvent(new Event('mode-changed'));
  };


  return (
    <div>

      <nav className='menu' id="menu"> {/* Thêm className 'hidden' nếu menu bị ẩn */}
        <ul>
          <li>
            <Link href="/" className="active">
              {/* <i className='bx bx-castle'></i> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 11h-2V6h1V2h-2v2h-1V2h-2v2h-1V2h-2v2h-1V2H8v2H7V2H5v4h1v5H4V9H2v12h7v-5a3 3 0 0 1 6 0v5h7V9h-2zm-10-1H8V7h2zm6 0h-2V7h2z"></path></svg>
              {/* <i className='md-castle'></i> */}
              <span>Trang chủ</span>
            </Link>
          </li>
          {/* Add other links similarly */}
        </ul>
        <div className="mode-mobile">
          <button onClick={toggleMode}>
            <i className={`bx ${isDarkMode ? 'bx-moon' : 'bx-sun'} sun-moon`}></i>
          </button>
        </div>
      </nav>


    </div>
  );
}
