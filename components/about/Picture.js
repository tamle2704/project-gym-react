import Slider from "react-slick";

export default function Picture() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                dots: false
            }
        }]
  };
  
  return (
    <div>
      <section className="picture">
        <div className="container">
          <div className="new-header text-center">
            <h2>ẢNH NỔI BẬT</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}
                className="images-slide"
                data-toggle="modal"
                data-target="#abc"
              >
                <li data-target="#carouselExampleIndicators" data-slide-to={0}>
                  <img className="w-100" src="img/phongtap/phongtap.jpg" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                  <img className="w-100" src="img/phongtap/phongtap2.jpg" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                  <img className="w-100" src="img/phongtap/phongtap3.jpg" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={3}>
                  <img className="w-100" src="img/phongtap/phongtap4.png" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={4}>
                  <img className="w-100" src="img/phongtap/phongtap5.png" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={5}>
                  <img className="w-100" src="img/phongtap/phongtap6.png" />
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={6}>
                  <img className="w-100" src="img/phongtap/phongtap7.jpg" />
                </li>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
