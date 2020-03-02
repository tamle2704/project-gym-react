import Slider from "react-slick";
import React, { useState } from "react";

export default function StoryIndex({ story }) {
  const [StoryIndex, setStoryIndex] = useState(story);
  const settings = {
    infinite: false,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true
  };

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
              <Slider {...settings}>
                {StoryIndex.map(story => (
                  <div key={story.id} className="item">
                    <img id="story" className="w-100" src={story.images} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
