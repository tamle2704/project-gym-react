import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div>
        <footer className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="logo col-md-3 col-12 text-md-left text-center">
                <a
                  className="navbar-brand text-center font-weight-bold text-white"
                  href="./index.html"
                >
                  <img className="img-fluid" alt="logo" src="./img/logo.png" />
                </a>
              </div>
              <div className="footer-link col-md-9 col-12">
                <div className="footer-menu d-flex justify-content-md-end align-items-center flex-md-row flex-column">
                  <a className="link-footer text-white" href="#">
                    Câu hỏi thường gặp
                  </a>
                  <a className="link-footer text-white" href="#">
                    Điều khoản
                  </a>
                  <a className="link-footer text-white" href="#">
                    Chính sách
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a id="button">
            <i className="far fa-arrow-alt-circle-up" />
          </a>
        </footer>
        <div className="container-fluid last-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 content-footer">
                <a
                  className="text-white"
                  href="tel:+84985521108"
                  target="_blank"
                >
                  Hotline: 0985521108
                </a>
                <div className="social-icon">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="https://www.instagram.com/obostadium/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
