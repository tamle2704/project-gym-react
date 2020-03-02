import Slider from "react-slick";
import React, { useState } from "react";

export default function BannerCarousel({ banner }) {
  const [BannerIndex, setBannerIndex] = useState(banner);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    speed: 1000,
    arrows: true,
    dots: false
  };
  return (
    <div>
      <section className="carousel-index">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings} className="banner-index">
                {BannerIndex.map(banner => {
                  return (
                    <div key={banner.id} className="item-banner">
                      <a href="./promo.html">
                        <img id="banner1" className="w-100" src={banner.url} />
                      </a>
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
