export default function AboutUs() {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-center">
                {" "}
                <img className="w-100" src="img/about us/index.png" alt />{" "}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="content-about">
                <h2 className="title-h2">
                  <span className="text-danger">
                    GYM<span className="text-white">ZONE</span>
                  </span>
                </h2>
                <h4 className="title-h4">
                  <span className="text-white">MAKING LIFE</span>
                  <span className="text-danger">BETTER</span>
                </h4>
                <p className="content-p text-white">
                  “Chúng tôi muốn chứng minh rằng để có được cuộc sống tốt và
                  lành mạnh hơn, bạn không nhất thiết phải tuân theo kỷ luật
                  thép hoặc phải hy sinh, thay vào đó, chỉ cần đưa vào lối sống
                  của mình những thói quen giúp nâng cao chất lượng cuộc sống,
                  đồng thời giảm thiểu những thói quen không có lợi.."
                </p>
                <p className="content-p text-white d-none d-lg-block">
                  Đối với chúng tôi, lợi ích của khách hàng chính là lợi nhuận
                  quý báu nhất. Kết quả thực sự của khách hàng là những gì
                  thương hiệu Gymzone luôn hướng đến.”{" "}
                </p>
                <a
                  href="#"
                  className="text-white btn-red"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Đăng ký tập thử
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
