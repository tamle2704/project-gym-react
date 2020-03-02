export default function PromoIndex() {
  function autoPlayYouTubeModal() {
    var trigger = $(".videoModalTriger");
    trigger.click(function() {
      var theModal = $(this).data("target");
      var videoSRC = $(this).attr("data-videoModal");
      var videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal).on("hidden.bs.modal", function(e) {
        $(theModal + " iframe").attr("src", "");
      });
    });
  }
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
            onClick={autoPlayYouTubeModal}
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
