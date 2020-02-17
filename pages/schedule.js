import Layout from "../components/Head";

import Banner from "../components/schedule/Banner";
import ScheduleJs from "../components/schedule/Schedule";
import Registration from "../components/Registration";
import Modal from "../components/Modal";

export default function Schedule() {
    return(
        <div>
           <Layout>
            <Banner />
            <ScheduleJs />
            <Registration />
            <Modal />
            </Layout>
        </div>
    )
}