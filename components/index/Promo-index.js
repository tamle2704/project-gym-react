export default function PromoIndex() {
  return (
    <div>
      <section className="promo">
        <div className="container-fluid">
          <a
            href="#"
            className="videoModalTriger"
            data-toggle="modal"
            data-target="#videoModal"
            data-videomodal="https://www.youtube.com/embed/OfhOzVnTAuw"
          >
            <img
              src="./img/promo/play-promo.png"
              className="img-promo text-center"
            />
          </a>
          <h2>
            KHÁM PHÁ CUỘC SỐNG <span className="text-danger">GYM</span> ZONE
          </h2>
        </div>
      </section>
    </div>
  );
}
