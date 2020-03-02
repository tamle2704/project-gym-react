import Layout from "../components/Head";
import Banner from "../components/contact/Banner";
import ContactJs from "../components/contact/Contact";
import Form from "../components/contact/Form";
import Map from "../components/contact/Map";
import Registration from "../components/modal + register/Registration";
import Modal from "../components/modal + register/Modal";
import BackToTop from "../components/backToTop";

export default function Contact() {
  return (
    <div>
      <Layout>
        <Banner />
        <ContactJs />
        <Form />
        <Map />
        <Registration />
        <Modal />
        <BackToTop />
      </Layout>
    </div>
  );
}
