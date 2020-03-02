import Layout from "../components/Head";
import Banner from "../components/blog/Banner";
import MainBlog from "../components/blog/Main-blog";
import Preference from "../components/blog/Preference";
import Registration from "../components/modal + register/Registration";
import Modal from "../components/modal + register/Modal";
import BackToTop from "../components/backToTop";
import {firebaseBlog} from "../components/firebase/firebase";

export default function Blog({data}) {
  return (
    <div>
      <Layout>
        <Banner />
        <MainBlog data={data}/>
        <Preference />
        <Registration />
        <Modal />
        <BackToTop />
      </Layout>
    </div>
  );
}
Blog.getInitialProps = async function() {
  const result = await firebaseBlog
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });
    return {data: result};
  };