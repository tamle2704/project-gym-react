export default function AboutIndex() {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-center">
                {" "}
                <img className="w-100" src="img/about us/index.png" alt="" />{" "}
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
                  “Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào
                  quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách
                  đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận
                  được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể,
                  mà hơn hết sức khỏe, lối sống cũng chuyển biến theo hướng tích
                  cực và lành mạnh hơn.
                </p>
                <p className="content-p text-white d-md-none d-lg-block">
                  Đối với chúng tôi, lợi ích của khách hàng chính là lợi nhuận
                  quý báu nhất. Kết quả thực sự của khách hàng là những gì
                  thương hiệu Gymzone luôn hướng đến.”{" "}
                </p>
                <div className="row">
                  <a href="about.html" className="text-white btn-red">
                    Tìm hiểu thêm
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
