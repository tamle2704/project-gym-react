export default function StoryIndex() {
  return (
    <div>
      <section className="story">
        <div className="container">
          <div className="new-header text-center">
            <h2>CÂU CHUYỆN THÀNH CÔNG</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="stories">
                <div className="item">
                  <img
                    id="story"
                    className="w-100"
                    src="img/story/story1.png"
                  />
                </div>
                <div className="item">
                  <img
                    id="story2"
                    className="w-100"
                    src="img/story/story2.png"
                  />
                </div>
                <div className="item">
                  <img
                    id="story3"
                    className="w-100"
                    src="img/story/story3.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
