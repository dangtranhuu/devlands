'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import '@/styles/post-viral.css';
import '../../../styles/post-viral.css';

export default function Post() {
  return (

    <div className="post-viral">
      <div className="title">
        <h2 className="title">Một số bài viết Nổi bật</h2>
        <a href='#'>
          <span>Xem thêm</span><i className='bx bx-chevron-right'></i>
        </a>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-header">
            <img src="/img/blog/img/banner.png" alt="rover" />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Technology</span>
            <h4>
              Xây dựng RestfulAPI với ExpressJS
            </h4>
            <p>
              ExpressJS, Ejs, MySQL, MongoDB
            </p>
            <div className="user">
              <img
                src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                alt="user" />
              <div className="user-info">
                <h5>Theanishtar</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="/img/blog/img/laravel-socket.10ac0667.png" alt="ballons" />
          </div>
          <div className="card-body">
            <span className="tag tag-purple">Popular</span>
            <h4>
              How to Keep Going When You Don’t Know What’s Next
            </h4>
            <p>
              The future can be scary, but there are ways to
              deal with that fear.
            </p>
            <div className="user">
              <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                alt="user" />
              <div className="user-info">
                <h5>Eyup Ucmaz</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="/img/blog/img/main.png" alt="city" />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Design</span>
            <h4>
              10 Rules of Dashboard Design
            </h4>
            <p>
              Dashboard Design Guidelines
            </p>
            <div className="user">
              <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
              <div className="user-info">
                <h5>Carrie Br/ewer</h5>
                <small>1w ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src="/img/blog/img/SummaryTable-of-System-Design-for-API-design.421e3983.png" alt="city" />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Design</span>
            <h4>
              10 Rules of Dashboard Design
            </h4>
            <p>
              Dashboard Design Guidelines
            </p>
            <div className="user">
              <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
              <div className="user-info">
                <h5>Carrie Br/ewer</h5>
                <small>1w ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
