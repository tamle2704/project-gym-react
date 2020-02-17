export default function CourseJs() {
  return (
    <div>
      <section className="course">
        <div className="container">
          <div className="new-header text-center">
            <h2>CÁC LỚP TẬP LUYỆN</h2>
            <hr />
          </div>
          <div className="row">
            <button
              className="btn btn-secondary active-button filter-course"
              data-filter="all"
            >
              Tất cả
            </button>
            <button
              className="btn btn-secondary filter-course"
              data-filter="groupx"
            >
              Group-X
            </button>
            <button
              className="btn btn-secondary filter-course"
              data-filter="weight-loss"
            >
              Giảm cân
            </button>
            <button
              className="btn btn-secondary filter-course"
              data-filter="weight-gain"
            >
              Tăng cân
            </button>
            <button
              className="btn btn-secondary filter-course"
              data-filter="martial-art"
            >
              Võ thuật
            </button>
            <button
              className="btn btn-secondary filter-course"
              data-filter="muscle"
            >
              Căng cơ
            </button>
          </div>
          <div className="row">
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter groupx">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/yoga.jpg" />
                <div className="title-course">
                  <h2 className="name-course">YOGA</h2>
                </div>
                <div className="course-content">
                  <h1>YOGA</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter weight-loss">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/giamcan.jpg" />
                <div className="title-course">
                  <h2 className="name-course">GIẢM CÂN</h2>
                </div>
                <div className="course-content">
                  <h1>GIẢM CÂN</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter weight-loss martial-art">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/kickfit.jpg" />
                <div className="title-course">
                  <h2 className="name-course">KICKFIT</h2>
                </div>
                <div className="course-content">
                  <h1>KICFIT</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter weight-loss groupx">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/dance.jpg" />
                <div className="title-course">
                  <h2 className="name-course">DANCE</h2>
                </div>
                <div className="course-content">
                  <h1>DANCE</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter muscle weight-gain weight-loss">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/hlcn.jpg" />
                <div className="title-course">
                  <h2 className="name-course">HUẤN LUYỆN CÁ NHÂN</h2>
                </div>
                <div className="course-content">
                  <h1>HUẤN LUYỆN CÁ NHÂN</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter muscle">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/giamcangco.jpg" />
                <div className="title-course">
                  <h2 className="name-course">GIẢM CĂNG CƠ</h2>
                </div>
                <div className="course-content">
                  <h1>GIẢM CĂNG CƠ</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter weight-gain weight-loss">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/battlerope.jpg" />
                <div className="title-course">
                  <h2 className="name-course">BATTLE ROPE</h2>
                </div>
                <div className="course-content">
                  <h1>BATTLE ROPE</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter weight-gain weight-loss ">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/PTX2.png" />
                <div className="title-course">
                  <h2 className="name-course">PTX-2</h2>
                </div>
                <div className="course-content">
                  <h1>PTX-2</h1>
                </div>
              </a>
            </div>
            <div className="item col-12 col-sm-6 col-md-4 col-lg-4 course-item filter martial-art weight-loss weight-gain">
              <a href="./kickfit.html">
                <img className="w-100" src="img/course/muay.jpg" />
                <div className="title-course">
                  <h2 className="name-course">MUAY THÁI</h2>
                </div>
                <div className="course-content">
                  <h1>MUAY THÁI</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
