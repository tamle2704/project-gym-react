import React, { useState, useEffect } from "react";

export default function CourseJs({ data }) {
  const [CourseJs, setCourseJs] = useState(data);
  useEffect(() => {
    const filter = document.getElementsByClassName("filter");
    for (let i = 0; i < filter.length; i++) {
      filter[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
    }
  });
  const filters = [
    "Tất cả",
    "Group-x",
    "Giảm cân",
    "Tăng cân",
    "Võ thuật",
    "Căng cơ"
  ];
  const onFilter = label => {
    setActive(label);
  };
  const [active, setActive] = useState("Tất cả");

  return (
    <div>
      <section className="course">
        <div className="container">
          <div className="new-header text-center">
            <h2>CÁC LỚP TẬP LUYỆN</h2>
            <hr />
          </div>
          <div className="row">
            {filters.map(fil => (
              <button
                key={fil}
                onClick={() => {
                  if (active !== fil) {
                    let filter = document.getElementsByClassName("filter");

                    for (let i = 0; i < filter.length; i++) {
                      filter[i].style =
                        "transform: scale(0);opacity: 0;transition: 0.5s;";
                    }
                    setTimeout(() => {
                      onFilter(fil);
                    }, 500);
                  }
                }}
                className={`btn btn-secondary ${
                  fil === active ? "active-button" : ""
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
          <div className="row">
            {CourseJs &&
              CourseJs.map(course => {
                for (let i in course.category) {
                  if (
                    active === "Tất cả" ||
                    course.category[i]
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/đ/g, "d")
                      .replace(/Đ/g, "D") ===
                      active
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/đ/g, "d")
                        .replace(/Đ/g, "D")
                  ) {
                    return (
                      <div
                        key={course.id}
                        className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter"
                      >
                        <a href="./kickfit.html">
                          <img className="w-100" src={course.images} />
                          <div className="title-course">
                            <h2 className="name-course">{course.name}</h2>
                          </div>
                          <div className="course-content">
                            <h1>{course.name}</h1>
                          </div>
                        </a>
                      </div>
                    );
                  }
                }
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
