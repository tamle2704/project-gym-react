import React, { useState, useEffect } from "react";

export default function MainBlog({ data }) {
  const [MainBlog, setMainBlog] = useState(data);
  useEffect(() => {
    const category = document.getElementsByClassName("category");
    for (let i = 0; i < category.length; i++) {
      category[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
    }
  });
  const categories = [
    "Tất cả",
    "Yoga",
    "Giảm cân",
    "Group-X",
    "Bài tập nữ",
    "Bài tập nam",
    "Dinh dưỡng"
  ];
  const onFilter = label => {
    setActive(label);
  };
  const [active, setActive] = useState("Tất cả");
  return (
    <div>
      <section className="main-blog">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 blog-left">
              {MainBlog &&
                MainBlog.slice(0, 4).map(blog => {
                  if (
                    active === "Tất cả" ||
                    blog.category
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/đ/g, "d")
                      .replace(/Đ/g, "D") ===
                      active
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/đ/g, "d")
                        .replace(/Đ/g, "D")
                  ) {
                    return (
                      <div key={blog.id} className="blog-detail category">
                        <div className="row">
                          <div className="col-md-12 col-lg-6 col-12">
                            <a href="./post.html">
                              <div
                                className="blog-img"
                                style={{
                                  backgroundImage: `url(${blog.thumbnail})`
                                }}
                              ></div>
                            </a>
                          </div>
                          <div className="col-md-12 col-lg-6 col-12 ">
                            <div className="blog-content">
                              <div className="date-tag">
                                <div className="tag">
                                  <a href="./post.html" className="text-danger">
                                    <i className="fas fa-circle" />
                                    <span className="text-dark">
                                      {blog.category}
                                    </span>
                                  </a>
                                </div>
                                <div className="date-box">
                                  <i className="text-danger far fa-calendar-alt" />
                                  <span> {blog.date}</span>
                                </div>
                              </div>
                              <a href="./post.html" className="text-dark">
                                <h3 className="title-blog">{blog.title}</h3>
                              </a>
                              <div className="content">
                                <p>{blog.describe}</p>
                              </div>
                              <div className="more">
                                <div className="read-more">
                                  <a className="text-danger" href="./post.html">
                                    XEM THÊM
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <div className="share">
                                  <span className="text-dark">Chia sẻ:</span>
                                  <a href="#" className="text-danger">
                                    <i className="fab fa-facebook" />
                                  </a>
                                  <a href="#" className="text-danger">
                                    <i className="fab fa-instagram" />
                                  </a>
                                  <a href="#" className="text-danger">
                                    <i className="fab fa-twitter-square" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

              <nav aria-label="Page navigation example" className="pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className="page-link text-dark"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link bg-danger text-white" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-dark"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 blog right">
              <div className="search-box col-12">
                <h3 className="title-right">TÌM KIẾM:</h3>
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <article className="categories-blog col-12">
                <h3 className="title-right">THỂ LOẠI:</h3>
                <ul className="categories">
                  {categories.map(cate => (
                    <li
                      key={cate}
                      onClick={() => {
                        if (active !== cate) {
                          let category = document.getElementsByClassName(
                            "category"
                          );
                          for (let i = 0; i < category.length; i++) {
                            category[i].style =
                              "transform: scale(0);opacity: 0;transition: 0.7s;";
                          }
                          setTimeout(() => {
                            onFilter(cate);
                          }, 500);
                        }
                      }}
                      className={`list ${
                        cate === active ? "active-button" : ""
                      }`}
                    >
                      <a className="text-dark" href="javascript:void(0)">
                        {cate}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="recent-post col-12">
                <h3 className="title-right">BÀI VIẾT GẦN ĐÂY:</h3>
                <div className="post-box">
                  <div className="post-img">
                    <a href="./post.html">
                      <img
                        className="img-fluid"
                        src="./img/blog/recent-post1.png"
                      />
                    </a>
                  </div>
                  <div className="post-title">
                    <a className="text-dark" href="./post.html">
                      <h4>TẬP THỂ THAO NÊN CHỌN TAI NGHE NÀO?</h4>
                    </a>
                    <p>
                      <a className="text-dark" href="./post.html">
                        20/11/2019
                      </a>
                    </p>
                  </div>
                </div>
                <div className="post-box">
                  <div className="post-img">
                    <a href="./post.html">
                      <img
                        className="img-fluid"
                        src="./img/blog/recent-post2.png"
                      />
                    </a>
                  </div>
                  <div className="post-title">
                    <a className="text-dark" href="./post.html">
                      <h4>7 động tác tập tại nhà giúp căng giãn cơ</h4>
                    </a>
                    <p>
                      <a className="text-dark" href="./post.html">
                        20/11/2019
                      </a>
                    </p>
                  </div>
                </div>
                <div className="post-box">
                  <div className="post-img">
                    <a href="./post.html">
                      <img
                        className="img-fluid"
                        src="./img/blog/recent-post3.png"
                      />
                    </a>
                  </div>
                  <div className="post-title">
                    <a className="text-dark" href="./post.html">
                      <h4>Thay đổi thói quen nhỏ để giảm cân nhanh chóng</h4>
                    </a>
                    <p>
                      <a className="text-dark" href="./post.html">
                        20/11/2019
                      </a>
                    </p>
                  </div>
                </div>
              </article>
              <article className="tag-box col-12">
                <h3 className="title-right">TAG:</h3>
                <ul className="tags">
                  <li>
                    <a href="#">Yoga</a>
                  </li>
                  <li>
                    <a href="#">Nam</a>
                  </li>
                  <li>
                    <a href="#">nữ</a>
                  </li>
                  <li>
                    <a href="#">Dinh dưỡng</a>
                  </li>
                  <li>
                    <a href="#">giảm cân</a>
                  </li>
                  <li>
                    <a href="#">Gym</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
