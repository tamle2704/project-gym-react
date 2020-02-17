export default function Form() {
  return (
    <div>
      <section className="form" id="form">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-sm-12 col-lg-6">
              <div className="img-form">
                <img className="w-100" src="./img/form-img.jpg" />
              </div>
            </div>
            <div className="col-md-12 col-12 col-sm-12 col-lg-6">
              <div className="form-reg">
                <div className="new-header ">
                  <h2>THAM GIA CÙNG CHÚNG TÔI</h2>
                  <hr />
                </div>
                <form
                  acceptCharset="utf-8"
                  action="thank-you.html"
                  method="get"
                  id="formContact"
                >
                  <div className="w-100 mb-3">
                    <label htmlFor="full-name">Họ và tên</label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      id="firstName"
                      placeholder="Name"
                      defaultValue
                      required
                    />
                  </div>
                  <div className="w-100 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="w-100 mb-3">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                      type="phone"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="w-100 mb-3">
                      <label htmlFor="address">Chọn khu vực bạn sống</label>
                      <select
                        className="custom-select d-block w-100"
                        id="country"
                        name="address"
                        required
                      >
                        <option value>Choose...</option>
                        <option>Hà Nội</option>
                        <option>Đà Nẵng</option>
                        <option>Nha Trang</option>
                        <option>Vũng Tàu</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="w-100 mb-3">
                      <label htmlFor="service">Chọn gói tập bạn muốn</label>
                      <select
                        className="custom-select d-block w-100"
                        name="service"
                        id="service"
                        required
                      >
                        <option value>Choose...</option>
                        <option>Gói khởi động - 6 tháng</option>
                        <option>Gói quyết tâm - 12 tháng</option>
                        <option>Gói đam mê - 24 tháng</option>
                        <option>Gói tập thử</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-100 mb-3">
                    <label htmlFor="note">Tin nhắn</label>
                    <textarea
                      className="w-100"
                      id="note"
                      name="note"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    type="submit"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
