export default function BannerCarousel() {
  return (
    <div>
      <section className="carousel-index">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-index">
                <div className="item-banner">
                  <a href="./promo.html">
                    <img
                      id="banner1"
                      className="w-100"
                      src="img/banner/banner.png"
                    />
                  </a>
                </div>
                <div className="item-banner">
                  <a href="./promo.html">
                    <img
                      id="banner2"
                      className="w-100"
                      src="./img/banner/banner-index2.png"
                    />
                  </a>
                </div>
                <div className="item-banner">
                  <a href="./promo.html">
                    <img
                      id="banner3"
                      className="w-100"
                      src="./img/banner/banner-index3.png"
                    />
                  </a>
                </div>
                <div className="item-banner">
                  <a href="./promo.html">
                    <img
                      id="banner4"
                      className="w-100"
                      src="./img/banner/banner-index4.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
