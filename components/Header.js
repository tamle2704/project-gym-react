import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <div>
      <header className="container-fluid fixed-top">
        <div className="menu">
          <nav className=" container clearfix navbar navbar-expand-xl navbar-dark">
            <Link href="/">
            <a className="navbar-brand font-weight-bold">
              <img className="img-fluid" alt="logo" src="./img/logo.png" />
            </a>
            </Link>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav m-auto">
                <li className={router.pathname === "/" ? "nav-item active" : "nav-item"}>
                  <Link href="/">
                  <a className="nav-link" >
                    Trang chủ
                    <span className="sr-only">(current)</span>
                  </a>
                  </Link>
                </li>
                <li className={router.pathname === "/about" ? "nav-item active" : "nav-item"}>
                  <Link href="./about">
                  <a className="nav-link" >
                    Về chúng tôi
                  </a>
                  </Link>
                </li>
                <li className={router.pathname === "/course" ? "nav-item active" : "nav-item"}>
                  <Link href="./course">
                  <a className="nav-link" >
                    Dịch vụ
                  </a>
                  </Link >
                </li>
                <li className={router.pathname === "/schedule" ? "nav-item active" : "nav-item"}>
                  <Link href="./schedule">
                  <a className="nav-link" >
                    Lịch tập
                  </a>
                  </Link>
                </li>
                <li className={router.pathname === "/blog" ? "nav-item active" : "nav-item"}>
                  <Link href="./blog">
                  <a className="nav-link" >
                    Blog
                  </a>
                  </Link>
                </li>
                <li className={router.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                  <Link href="./contact">
                  <a className="nav-link" >
                    Liên hệ
                  </a>
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                ĐĂNG KÝ TẬP THỬ
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
