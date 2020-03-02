import Layout from "../components/Head";

import Banner from "../components/schedule/Banner";
import ScheduleJs from "../components/schedule/Schedule";
import Registration from "../components/modal + register/Registration";
import Modal from "../components/modal + register/Modal";
import BackToTop from "../components/backToTop";
import { firebaseSchedule } from "../components/firebase/firebase";

export default function Schedule({data}) {
  return (
    <div>
      <Layout>
        <Banner />
        <ScheduleJs data={data} />
        <Registration />
        <Modal />
        <BackToTop />
      </Layout>
    </div>
  );
}
Schedule.getInitialProps = async function() {
  const result = await firebaseSchedule
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    })

    .catch(() => {
      return [];
    });
    return {data: result};
  };