import Slider from "react-slick";
import React, { useState } from "react";

export default function BlogIndex({ blog }) {
  const [BlogIndex, setBlogIndex] = useState(blog);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div>
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="m-auto new-header text-center">
              <h2>BÀI VIẾT MỚI NHẤT</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {BlogIndex.map(blog => {
                  return (
                    <div key={blog.id} className="box">
                      <a href="./post.html">
                        <div className="img-blog">
                          <img className="w-100" src={blog.thumbnailIndex} />
                        </div>
                      </a>
                      <div className="content">
                        <div className="tag">
                          <a href="#" className="text-danger">
                            <i className="fas fa-circle" />
                            <span className="text-dark">{blog.category}</span>
                          </a>
                        </div>
                        <div className="date-box">
                          <i className="text-danger far fa-calendar-alt" />
                          <span>{blog.date}</span>
                        </div>
                        <a href="./post.html">
                          <h3>{blog.title}</h3>
                        </a>
                        <p>{blog.describe}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
