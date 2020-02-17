import Layout from "../components/Head";
import Banner from "../components/course/Banner";
import CartSet from "../components/course/Card-set";
import CourseJs from "../components/course/Course";
import Registration from "../components/Registration";
import Modal from "../components/Modal";

export default function Course() {
    return (
        <div>
            <Layout>
            <Banner />
            <CartSet />
            <CourseJs />
            <Registration />
            <Modal />
            </Layout>

        </div>
    )
}