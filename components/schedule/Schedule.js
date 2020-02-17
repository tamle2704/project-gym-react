export default function ScheduleJs() {
  return (
    <div>
      <section className="course">
        <div className="container">
          <div className="row">
            <button
              className="btn btn-secondary active-button filter-button"
              data-filter="monday"
            >
              Thứ Hai
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="tuesday"
            >
              Thứ Ba
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="wednesday"
            >
              Thứ Tư
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="thurday"
            >
              Thứ Năm
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="friday"
            >
              Thứ Sáu
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="saturday"
            >
              Thứ Bảy
            </button>
            <button
              className="btn btn-secondary filter-button"
              data-filter="sunday"
            >
              Chủ Nhật
            </button>
          </div>
          <div className="row filter-container">
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter tuesday wednesday thurday friday saturday sunday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/yoga.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">6:00AM-8:00AM</p>
                  <h2>Yoga</h2>
                  <p className="trainer-name">Trang Tracy</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter tuesday wednesday thurday friday saturday sunday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/exercise.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">8:00AM-10:00AM</p>
                  <h2>CARDIO</h2>
                  <p className="trainer-name">Linn Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter thurday saturday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/waist.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">10:00AM-12:00AM</p>
                  <h2>PTX-2</h2>
                  <p className="trainer-name">An Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter tuesday wednesday thurday sunday">
              <div className="box-schedule">
                <div className="icon">
                  <img
                    className="img-fluid"
                    src="./img/icon/boxing-gloves.png"
                  />
                </div>
                <div className="schedule-content">
                  <p className="time">12:00AM-1:00PM</p>
                  <h2>KICKFIT</h2>
                  <p className="trainer-name">Ricky</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter wednesday friday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/zumba.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">3:00PM-5:00PM</p>
                  <h2>Sexy Dance</h2>
                  <p className="trainer-name">Linh Chi</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter tuesday thurday saturday">
              <div className="box-schedule">
                <div className="icon">
                  <img
                    className="img-fluid"
                    src="./img/icon/icons8-cloud-100.png"
                  />
                </div>
                <div className="schedule-content">
                  <p className="time">5:00PM-6:00PM</p>
                  <h2>Battle Rope</h2>
                  <p className="trainer-name">An Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter wednesday thurday friday sunday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/zumba.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">6:00PM-7:00PM</p>
                  <h2>Zumba</h2>
                  <p className="trainer-name">Linh Chi</p>
                </div>
              </div>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-xl-3 filter tuesday wednesday thurday friday saturday sunday">
              <div className="box-schedule">
                <div className="icon">
                  <img className="img-fluid" src="./img/icon/muay-thai.png" />
                </div>
                <div className="schedule-content">
                  <p className="time">7:00PM-9:00PM</p>
                  <h2>Muay Thái</h2>
                  <p className="trainer-name">Ricky</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
