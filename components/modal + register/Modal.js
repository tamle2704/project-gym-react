import Link from "next/link";

export default function Modal() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              />
              <div className="form-inner">
                <form
                  acceptCharset="utf-8"
                  action="thank-you.html"
                  method="get"
                  id="formModal"
                >
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="input-group-wrapper">
                        <div className="headline input-group">
                          <h2>
                            <span>ĐĂNG KÝ</span> <br className="hidden-xs" />
                            TẬP THỬ MIỄN PHÍ
                          </h2>
                          <p>
                            <span className="line-short" />
                          </p>
                          <p>
                            Hãy nhanh tay đăng ký để được trải nghiệm trung{" "}
                            <br className="hidden-xs" /> tâm gần nhất và nhận tư
                            vấn miễn phí về dịch
                            <br className="hidden-xs" />
                            vụ tại Gymzone &amp; Fitness!
                          </p>
                        </div>
                      </div>
                      <div className="input-group-wrapper">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control w-100"
                            placeholder="Họ tên"
                            name="name"
                            required
                          />
                        </div>
                        <div className="input-group">
                          <input
                            name="phone"
                            type="tel"
                            defaultValue
                            id="txtPhone"
                            className="form-control w-100"
                            placeholder="Số ĐT"
                          />
                        </div>
                        <div className="input-group">
                          <select
                            name="address"
                            required
                            className="form-control w-100"
                          >
                            <option value>Chọn khu vực bạn sống</option>
                            <option>Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                            <option>T.P Biên Hòa</option>
                            <option>T.P Bình Dương</option>
                            <option>Đà Nẵng</option>
                            <option>Nha Trang</option>
                            <option>Cần Thơ</option>
                            <option>Vũng Tàu</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="input-group-wrapper">
                        <div className="input-group btn-center">
                          <button
                            type="submit"
                            id="cta_signup_form"
                            data_ceid="cta_signup_form"
                            value="Đăng ký ngay"
                            className="btn btn-danger btn-regis"
                          >
                            ĐĂNG KÝ NGAY
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
