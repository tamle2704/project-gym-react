export default function CartSet() {
  return (
    <div>
      <section className="card-set">
        <div className="container">
          <div className="new-header text-center">
            <h2>DỊCH VỤ THẺ TẬP</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link title-card active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    GÓI KHỞI ĐỘNG
                  </a>
                  <a
                    className="nav-item nav-link title-card"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    GÓI QUYẾT TÂM
                  </a>
                  <a
                    className="nav-item nav-link title-card"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    GÓI ĐAM MÊ
                  </a>
                  <a
                    className="nav-item nav-link title-card"
                    id="nav-about-tab"
                    data-toggle="tab"
                    href="#nav-about"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                  >
                    GÓI TẬP THỬ
                  </a>
                </div>
              </nav>
              <div
                className="tab-content py-3 px-3 px-sm-0"
                id="nav-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="card-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img
                            className="w-100"
                            src="./img/course/card-img.png"
                          />
                        </div>
                        <div className="card-sale">
                          <img src="./img/course/sale-off.png" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h3>6 THÁNG</h3>
                          <p>
                            Phù hợp với các bạn chỉ ở Việt Nam thời gian ngắn
                            hạn, phải thường xuyên di chuyển như du học sinh,
                            v.v. hoặc những bạn muốn thử sức bền, độ kiên trì và
                            tính kỉ luật cá nhân trước khi dấn thân vào con
                            đường tập luyện. Trong thời gian 6 tháng, bạn sẽ
                            trải nghiệm đầy đủ cơ sở vật chất, chất lượng dịch
                            vụ, không khí tập luyện máu lửa ở Gymzone, cũng như
                            nhìn thấy kết quả của bước đầu luyện tập.
                          </p>
                          <div className="promotion">
                            <h4>Quà tặng</h4>
                            <ul>
                              <li>2 buổi HLV miễn phí</li>
                            </ul>
                          </div>
                        </div>
                        <div className="more-card">
                          <a
                            href="./contact.html#form"
                            className="text-white btn-red"
                          >
                            Đăng ký dịch vụ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="card-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img
                            className="w-100"
                            src="./img/course/card-img2.png"
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h3>12 THÁNG</h3>
                          <p>
                            Đây là gói tập phổ biến nhất ở Gymzone. 12 tháng đầu
                            tiên của khó khăn, 12 tháng đầu tiên dễ dàng bỏ
                            cuộc, nhưng cũng là 12 tháng đầu tiên nhìn thấy sự
                            thay đổi của bản thân. Hãy kiên trì luyện tập 1 năm,
                            và bạn sẽ có hàng chục năm sau đó để tiếp tục nếp
                            sống văn minh, lành mạnh và kỉ luật như thế.
                          </p>
                          <div className="promotion">
                            <h4>Quà tặng</h4>
                            <ul>
                              <li>2 buổi HLV miễn phí</li>
                              <li>Tặng túi tập gym</li>
                              <li>Tặng 2 voucher</li>
                            </ul>
                          </div>
                          <div className="more-card">
                            <a
                              href="./contact.html#form"
                              className="text-white btn-red"
                            >
                              Đăng ký dịch vụ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="card-item">
                    <div className="row">
                      <div className="col-md-5 col-sm-12">
                        <div className="card-img">
                          <img
                            className="w-100"
                            src="./img/course/card-img3.png"
                          />
                        </div>
                        <div className="card-sale">
                          <img src="./img/course/sale-off.png" />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12">
                        <div className="card-content">
                          <h3>24 THÁNG</h3>
                          <p>
                            Nếu là một người có tính kỉ luật và quyết tâm cao
                            độ, có nhu cầu tập luyện trong môi trường đúng chất
                            gym, gắn bó với một cộng đồng có trình độ và hiểu
                            biết, mong muốn duy trì lối sống lành mạnh, với chi
                            phí hiệu quả kinh tế nhất, thì đây sẽ là gói tập
                            dành cho bạn.
                          </p>
                          <div className="promotion">
                            <h4>Quà tặng</h4>
                            <ul>
                              <li>2 buổi HLV miễn phí</li>
                              <li>Tặng túi tập gym</li>
                              <li>Tặng 2 voucher</li>
                            </ul>
                          </div>
                        </div>
                        <div className="more-card">
                          <a
                            href="./contact.html#form"
                            className="text-white btn-red"
                          >
                            Đăng ký dịch vụ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-about"
                  role="tabpanel"
                  aria-labelledby="nav-about-tab"
                >
                  <div className="card-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img
                            className="w-100"
                            src="./img/course/card-img3.jpg"
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content">
                          <h3>1 TUẦN</h3>
                          <p>
                            Sẽ là 1 tuần tập thử miễn phí tại Gymzone, bạn có
                            thể trải nghiệm đầy đủ cơ sở vật chất, chất lượng
                            dịch vụ, không khí tập luyện máu lửa ở đây, cũng như
                            nhìn thấy kết quả của bước đầu luyện tập. Bạn sẽ
                            không phải trả bất cứ khoản phí nào trong 1 tuần
                            này. Sau đó bạn có thể cân nhắc các gói tập ở trên.
                          </p>
                        </div>
                        <div className="more-card">
                          <a
                            href="./contact.html#form"
                            className="text-white btn-red"
                          >
                            Đăng ký dịch vụ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
