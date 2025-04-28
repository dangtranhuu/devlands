'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import Main from './main/page';
import Post from './post/page';
import Slides from './slider/page';

import "@/styles/home-page.css";

export default function HomePage() {
  return (

    <div className='home-page'>
      <Slides />
      <Main />
      <Post />
    </div>

  );
}
