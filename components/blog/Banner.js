export default function Banner() {
  return (
    <div>
      <section
        className="banner"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/banner/banner-blog.jpg) no-repeat center top",
          backgroundSize: "cover"
        }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="title-banner">BLOG</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
