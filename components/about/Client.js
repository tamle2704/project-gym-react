import Slider from "react-slick";

export default function Client() {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15px"
        }
      }
    ]
  };

  return (
    <div>
      <section className="client">
        <div className="container-fluid">
          <div className="container">
            <div className="new-header text-center">
              <h2 className="text-white">
                HỘI VIÊN GYMZONE NÓI GÌ VỀ CHÚNG TÔI
              </h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-12">
                <Slider {...settings} className="testimonial-reel">
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-1.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Kỳ Duyên</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          {" "}
                          Tôi bắt đầu tham gia tập tại Gymzone cách đây một năm
                          và từ lúc đó, Gymzone là nơi mà tôi luôn muốn đến. Tập
                          luyện và thực hiện chế độ dinh dưỡng mà HLV cá nhân tư
                          vấn cho tôi vóc dáng tôi mơ ước – săn chắc, linh hoạt,
                          rạng rỡ. Hơn nữa, tập luyện còn giúp tôi phát triển
                          tính kỉ luật và rèn luyện ý chí mạnh mẽ để khẳng định
                          bản thân và theo đuổi mục tiêu của mình. Và kết quả
                          như bạn thấy, tôi đăng quang ngôi vị hoa hậu Việt Nam
                          2014. Gymzone đã làm thay đổi cuộc sống của tôi. Tôi
                          có lối sống lành mạnh hơn: Đọc sách, học thêm các kỹ
                          năng mới như nấu ăn có khoa học. Tôi yêu thích việc
                          chăm sóc bản thân, gia đình và bạn bè đồng thời biết
                          được giá trị của việc tập luyện đối với sức khoẻ.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-2.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Phạm Hương</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          Ít ai biết, để sở hữu được thân hình săn chắc và quyến
                          rũ như vậy, Hương đã trải qua một kì huấn luyện cam go
                          về thể chất và đặc biệt là một chế độ dinh dưỡng
                          nghiêm ngặt. Các bài tập mà Huấn luyện viên tại
                          Gymzone thường áp dụng cho Hương chính là lunge, gập
                          bụng, jumping squat trên cầu thang, plank… Không những
                          vậy, Hương còn tuân thủ tuyệt đối kế hoạch dinh dưỡng
                          mà đội ngũ chuyên gia hình thể và dinh dưỡng của
                          Gymzone đề xuất. Chỉ sau hai tháng, cơ thể của Hương
                          đã có những thay đổi thật sự tích cực. Tỉ lệ mỡ toàn
                          cơ thể của Phạm Hương rơi vào mức 18%. Đây là một con
                          số cực kì lý tưởng của các mỹ nhân thế giới.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-6.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Diễm My</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          Ở Gymzone, có rất nhiều môn học và chương trình huấn
                          luyện mà My yêu thích như: Yoga, Kickfit và tập luyện
                          một kèm một cùng huấn luyện viên cá nhân. Đặc biệt,
                          chương trình huấn luyện cá nhân mang đến nhiều lợi ích
                          như cơ thể săn chắc rõ rệt, thể lực cũng được nâng cao
                          nhanh chóng. Sau một thời gian luyện tập, My đã cảm
                          thấy rõ sự săn chắc của cơ thể. Và cho dù phải làm
                          việc liên tục, đầu óc của My vẫn luôn tỉnh táo và cơ
                          thể vẫn giữ được sự linh hoạt. My hy vọng, những ai
                          đến với Gymzone cũng đạt được những mục tiêu của chính
                          mình giống như My.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-7.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Hương Giang</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          Giang bắt đầu tập luyện tại Gymzone vào 2 năm trước.
                          Đến thời điểm hiện tại, Giang có thể tự tin khẳng
                          định, Gymzone là trung tâm thể hình và giải trí hàng
                          đầu tại Việt Nam và là điểm đến quen thuộc của nhiều
                          người của công chúng. Bộ môn yêu thích nhất của của
                          Giang tại Gymzone là Yoga. Khi thực hành các động tác
                          Yoga, Giang học hỏi được sự cân bằng, khéo léo. Ở
                          ngưỡng tuổi 30, tập luyện Yoga xen kẽ cùng các buổi
                          tập cùng huấn luyện viên cá nhân mang đến cho Giang sự
                          tươi trẻ về ngoại hình và sự phấn chấn trong tinh
                          thần.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-5.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Vũ Cát Tường</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          {" "}
                          Thói quen tập luyện tại Gymzone đã giúp Tường thực sự
                          thay đổi, nhất là ngoại hình, nhiều người nghi ngờ
                          mình thẩm mỹ vì khuôn mặt mình thon gọn hơn nhiều so
                          với thời gian thi The Voice. Sự thật nằm ở những buổi
                          vác tạ chạy vòng vòng trong phòng tập cùng với huấn
                          luyện viên. Nếu như trong suốt bao năm qua tôi không
                          luyện tập dưới áp lực và kỷ luật thì làm sao mình có
                          thể rèn được sức mạnh như thế. Không chỉ là sự thay
                          đổi về ngoại hình về thể lực mà thành quả ý nghĩa nhất
                          việc tập luyện chính là một tinh thần thép thật sự.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className="box">
                    <figure className="image">
                      <img
                        className="img-fluid rounded-circle"
                        src="./img/hoivien/celeb-9.png"
                      />
                    </figure>
                    <div className="test-component">
                      <article className="test-title">
                        <h4>Hồ Vĩnh Khoa</h4>
                      </article>
                      <article className="test-content">
                        <p>
                          Trải qua sự nghiệp người mẫu 13 năm tại Hồng Kông,
                          Singapore, Thái Lan, Philippines, Úc, Việt Nam
                          ....cũng như tham gia đóng một số bộ phim tại Việt
                          Nam. Ngoài công việc trong ngành giải trí nói trên, ít
                          ai biết công việc chính chiếm toàn bộ thời gian của
                          tôi lại là điều hành mảng kinh doanh và truyền thông
                          cho một công ty vận tải. Với lịch trình làm việc bận
                          rộn, tôi vẫn có thể vừa hoàn thành vai trò của một
                          doanh nhân, vừa tham gia các hoạt động giải trí vừa
                          duy trì được body săn chắc, khỏe khoắn đến vậy vì tôi
                          hiểu rằng: để có thể phát triển sự nghiệp và chăm sóc
                          gia đình tốt nhất, tôi cần một cơ thể khỏe mạnh và
                          luôn tràn đầy sức sống.
                        </p>
                      </article>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
