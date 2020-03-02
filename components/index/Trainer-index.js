import Slider from "react-slick";
import React, { useState } from "react";

export default function TrainerIndex({ trainer }) {
  const [Trainer, setTrainer] = useState(trainer);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <section className="trainer">
        <div className="container">
          <div className="m-auto new-header text-center">
            <h2>GẶP GỠ NHỮNG CHUYÊN GIA THỂ HÌNH HÀNG ĐẦU</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {Trainer.map(trainer1 => {
                  return (
                    <div key={trainer1.id} className="box-trainer">
                      <div className="imgtrainer">
                        <img className="w-100" src={trainer1.images} />
                      </div>
                      <div className="content">
                        <h3 className="text-center text-danger">
                          {trainer1.name}
                        </h3>
                        <h5 className="text-center">{trainer1.title}</h5>
                        <p>{trainer1.quote1}</p>
                        <p>{trainer1.quote2}</p>
                        <p>{trainer1.quote3}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
