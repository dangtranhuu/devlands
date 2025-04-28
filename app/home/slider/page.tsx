'use client'; // Để báo rằng đây là một Client Component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/slides.css';

export default function Slides() {
  const [slideIndex, setSlideIndex] = useState(1); // Đặt trạng thái cho slideIndex
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const slideContainer = document.getElementById('slideContainer');
    const slides = document.querySelectorAll('.slide');
    const totalSlidesCount = slides.length;
    setTotalSlides(totalSlidesCount);

    if (slideContainer) {
      const slide = slideContainer.querySelector('.slide') as HTMLElement; // Chuyển đổi kiểu về HTMLElement

      if (slide) {
        const slideWidth = slide.offsetWidth || 0; // Lấy chiều rộng của slide
        slideContainer.style.transform = `translateX(calc(-${slideWidth * slideIndex}px - 3px))`;
      }
    }
  }, [slideIndex]);


  // Hàm xử lý di chuyển slide khi người dùng bấm nút
  const moveSlide = (direction: number) => { // Định nghĩa kiểu cho direction
    const slideContainer = document.getElementById('slideContainer');
    const slide = slideContainer?.querySelector('.slide') as HTMLElement;

    if (slideContainer && slide) {
      const slideWidth = slide.offsetWidth; // Lấy chiều rộng của một slide

      let newSlideIndex = slideIndex + direction;

      // Xử lý khi đến slide "ảo"
      if (newSlideIndex === 0) {
        newSlideIndex = totalSlides - 2; // Nhảy về slide cuối thật
      } else if (newSlideIndex >= totalSlides - 1) {
        newSlideIndex = 1; // Nhảy về slide đầu tiên thật
      }

      setSlideIndex(newSlideIndex); // Cập nhật slideIndex

      // Dịch chuyển với giá trị chính xác dựa trên chiều rộng của slide
      slideContainer.style.transition = 'transform 0.5s ease-in-out';

      let ss = newSlideIndex * 3; // Cách tính cho hiệu ứng dịch chuyển
      // slideContainer.style.transform = `translateX(calc(-${slideWidth * newSlideIndex}px - ${ss}px))`;

      // Cập nhật phép tính để tạo hiệu ứng trượt vô tận
      if (newSlideIndex === 0) {
        slideContainer.style.transform = `translateX(calc(-${slideWidth * (totalSlides - 2)}px - ${ss}px))`; // Về slide cuối
      } else {
        slideContainer.style.transform = `translateX(calc(-${slideWidth * newSlideIndex}px - ${ss}px))`;
      }
    }
  };

  return (
    <div className="slider-container">
      <div className="slides" id="slideContainer">
        <div className="slide slide-3">
          <div className="left">
            <p className="title">Trang 3</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>


            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">BẮT ĐẦU NGAY</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>


          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 3" />
          </div>
        </div>

        <div className="slide slide-1">
          <div className="left">
            <p className="title">Đây là tiêu đề</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>

            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">BẮT ĐẦU NGAY</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>

          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 1" />
          </div>
        </div>

        <div className="slide slide-2">
          <div className="left">
            <p className="title">Trang 2</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>

            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">BẮT ĐẦU NGAY</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>

          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 2" />
          </div>
        </div>

        <div className="slide slide-3">
          <div className="left">
            <p className="title">Trang 3</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>

            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">BẮT ĐẦU NGAY</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>

          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 3" />
          </div>
        </div>

        {/* Slide "ảo" (sao chép từ slide đầu tiên) */}
        <div className="slide slide-1">
          <div className="left">
            <p className="title">Đây là tiêu đề</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 1" />
          </div>
        </div>
      </div>

      <button className="prev" onClick={() => moveSlide(-1)}>
        <i className='bx bx-chevron-left'></i>
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        <i className='bx bx-chevron-right'></i>
      </button>
    </div>
  );
}
