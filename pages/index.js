import BannerCarousel from "../components/index/Banner-carousel";
import CourseIndex from "../components/index/Course-index";
import AboutIndex from "../components/index/About-index";
import TrainerIndex from "../components/index/Trainer-index";
import PromoIndex from "../components/index/Promo-index";
import ModalVideo from "../components/index/Modal-video";
import StoryIndex from "../components/index/Story-index";
import Registration from "../components/modal + register/Registration";
import BlogIndex from "../components/index/Blog-index";
import Wrap from "../components/index/Wrap";
import Layout from "../components/Head";
import Modal from "../components/modal + register/Modal";
import BackToTop from "../components/backToTop";

import {
  firebaseBanner,
  firebaseCourse,
  firebaseTrainer,
  firebaseStory,
  firebaseBlog
} from "../components/firebase/firebase";

export default function Index({ banner, course, trainer, story, blog }) {
  return (
    <div>
      <Layout>
        <Wrap />
        <BannerCarousel banner={banner} />
        <CourseIndex course={course} />
        <AboutIndex />
        <TrainerIndex trainer={trainer} />
        <PromoIndex />
        <Modal />
        <ModalVideo />
        <StoryIndex story={story} />
        <Registration />
        <BlogIndex blog={blog} />
        <BackToTop />
      </Layout>
    </div>
  );
}

Index.getInitialProps = async function() {
  let result = await firebaseBanner
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });

  let result1 = await firebaseCourse
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });

  let result2 = await firebaseTrainer
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });

  let result3 = await firebaseStory
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });

  let result4 = await firebaseBlog
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });
  return {
    banner: result,
    course: result1,
    trainer: result2,
    story: result3,
    blog: result4
  };
};

