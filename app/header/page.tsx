'use client'; // Thêm dòng này để báo rằng đây là một Client Component

import Link from 'next/link';
import { useState } from 'react';
// import Image from 'next/image';
import '@/styles/header.css';

export default function Header() {
  const [searchValue, resultSearch] = useState<string>('');

  const searchAllPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    resultSearch(e.target.value); // Cập nhật state khi input thay đổi
  };
  return (
    <div>
      <header>

        <div className="header" id="header">
          <div className="logo">
            <img src="/img/ico/frog-bc.png" alt="DaviLands" />
            <h1 className=""><a className="_subTitle_vdbp4_58 d-lg-none" href="/">DaviLands </a></h1>
          </div>


          <div className="search">
            <i className="search-icon"></i>
            <input placeholder="Tìm kiếm..."
              value={searchValue}
              onChange={searchAllPage} />
          </div>

          <div id="navbar-actions-portal">
            <button className="register">
              <Link href={"/register"}>Đăng ký</Link>
            </button>
            <button className="signin">
              <Link href={"/signin"}>Đăng nhập</Link>
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}