import Layout from "../components/Head";
import Banner from "../components/blog/Banner";
import MainBlog from "../components/blog/Main-blog";
import Preference from "../components/blog/Preference";
import Registration from "../components/Registration";
import Modal from "../components/Modal";

export default function Blog() {
    return(
        <div>
            <Layout>
            <Banner />
            <MainBlog />
            <Preference />
            <Registration />
            <Modal />
            </Layout>
        </div>
    )
}