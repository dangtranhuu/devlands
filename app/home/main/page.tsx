'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

// import '/css/boostrap.min.css';
import '@/styles/slider.css';
import '../../../styles/slider.css';

export default function Main() {
  return (
    <div id="slider">
      <div className="left">
        <div className="text-content">
          <span className="text-heading welcome">Chào mừng đến với</span>
          <br />
          <span id="heading-logo" className="heading-logo" >DaviTek</span>
          <div className="text-description">
            <p>Một diễn đàn học tập dành cho developer</p>
          </div>

          <button className="cssbuttons-io-button"> Bắt đầu nào
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="right">
        <img src="/img/facion/frog-techs.gif" alt="Description of image" />
      </div>
    </div>

  );
}
