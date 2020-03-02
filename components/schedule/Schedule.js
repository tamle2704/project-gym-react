import React, { useState, useEffect } from "react";

export default function ScheduleJs({ data }) {
  const [ScheduleJs, setScheduleJs] = useState(data);
  useEffect(() => {
    const filter = document.getElementsByClassName("filter");
    for (let i = 0; i < filter.length; i++) {
      filter[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
    }
  });
  const filters = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ nhật"
  ];
  const onFilter = label => {
    setActive(label);
  };
  const [active, setActive] = useState("Thứ Hai");

  return (
    <div>
      <section className="course">
        <div className="container">
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
          <div className="row filter-container">
            {ScheduleJs &&
              ScheduleJs.map(schedules => {
                for (let i in schedules.timetable) {
                  if (
                    active === "Thứ Hai" ||
                    schedules.timetable[i]
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
                      <div key={schedules.id} className="item col-12 col-sm-6 col-md-4 col-xl-3 filter">
                        <div className="box-schedule">
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src={schedules.thumbnail}
                            />
                          </div>
                          <div className="schedule-content">
                            <p className="time">{schedules.time}</p>
                            <h2>{schedules.name}</h2>
                            <p className="trainer-name">{schedules.trainer}</p>
                          </div>
                        </div>
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
