export default function ContactJs() {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="address-box">
                <div className="logo-box">
                  <img
                    className="img-fluid m-auto"
                    src="./img/icon/house.png"
                  />
                </div>
                <div className="text">
                  <h3>Khu đô thị Sài Đồng, quận Long Biên, Hà Nội </h3>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="contact-box">
                <div className="logo-box">
                  <img
                    className="img-fluid m-auto"
                    src="./img/icon/contact.png"
                  />
                </div>
                <div className="text">
                  <h3>098.552.1108</h3>
                  <h3>Gymzone@gmail.com</h3>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="open-box">
                <div className="logo-box">
                  <img className="img-fluid m-auto" src="./img/icon/open.png" />
                </div>
                <div className="text">
                  <h3>06:00 AM - 09:00 PM</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
