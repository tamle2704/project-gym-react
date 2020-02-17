export default function Preference() {
  return (
    <div>
      <section className="preference">
        <div className="container">
          <div className="new-header text-center">
            <h2>ƯU ĐÃI ĐẶC BIỆT</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 item">
              <a href="./promo.html">
                <img className="w-100" src="./img/promo/promo1.png" />
              </a>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 item">
              <a href="./promo.html">
                <img className="w-100" src="./img/promo/promo2.png" />
              </a>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 item">
              <a href="./promo.html">
                <img className="w-100" src="./img/promo/promo3.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
