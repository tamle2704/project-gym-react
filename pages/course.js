import Layout from "../components/Head";
import Banner from "../components/course/Banner";
import CartSet from "../components/course/Card-set";
import CourseJs from "../components/course/Course";
import Registration from "../components/modal + register/Registration";
import Modal from "../components/modal + register/Modal";
import BackToTop from "../components/backToTop";

import {firebaseCourse} from "../components/firebase/firebase";

export default function Course({data}) {
  return (
    <div>
      <Layout>
        <Banner />
        <CartSet />
        <CourseJs data={data}/>
        <Registration />
        <Modal />
        <BackToTop />
      </Layout>
    </div>
  );
}

Course.getInitialProps = async function() {
  const result = await firebaseCourse
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });
    return {data: result};
  };