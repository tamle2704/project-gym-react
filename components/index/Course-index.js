import React, { useState } from "react";

export default function CourseIndex({ course }) {
  const [CourseIndex, setCourseIndex] = useState(course);
  return (
    <div>
      <section className="course">
        <div className="container">
          <div className="new-header text-center">
            <h2>CÁC DỊCH VỤ LUYỆN TẬP</h2>
            <hr />
          </div>
          <div className="row">
            {CourseIndex.slice(0, 6).map(course1 => {
              return (
                <div
                  key={course1.id}
                  className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item"
                >
                  <a href="./kickfit.html">
                    <img className="w-100" src={course1.images} />
                    <div className="title-course">
                      <h2 className="name-course">{course1.name}</h2>
                    </div>
                    <div className="course-content">
                      <h1>{course1.name}</h1>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="m-auto">
              <a href="/about.html" className="text-white btn-red">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
