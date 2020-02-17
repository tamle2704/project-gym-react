import BannerCarousel from "../components/index/Banner-carousel";
import CourseIndex from "../components/index/Course-index";
import AboutIndex from "../components/index/About-index";
import TrainerIndex from "../components/index/Trainer-index";
import PromoIndex from "../components/index/Promo-index";
import ModalVideo from "../components/index/Modal-video";
import StoryIndex from "../components/index/Story-index";
import Registration from "../components/Registration";
import BlogIndex from "../components/index/Blog-index";

import Layout from "../components/Head";

export default function Index() {
  return (
    <div>
      <Layout>
        <BannerCarousel />
        <CourseIndex />
        <AboutIndex />
        <TrainerIndex />
        <PromoIndex />
        <ModalVideo />
        <StoryIndex />
        <Registration />
        <BlogIndex />
      </Layout>
    </div>
  );
}
