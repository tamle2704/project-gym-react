export default function Map() {
  return (
    <div>
      <section className="map">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8205194853354!2d105.91028991538973!3d21.03986629277393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a90599b26d9f%3A0x2a187d389c81333e!2sArmy%20Fitness%20%26%20yoga!5e0!3m2!1svi!2s!4v1574697863321!5m2!1svi!2s"
                width="100%"
                height={500}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
