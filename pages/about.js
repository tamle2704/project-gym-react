import Layout from "../components/Head";
import BannerAbout from "../components/about/Banner-about";
import Highlight from "../components/about/Highlight";
import AboutUs from "../components/about/About-us";
import Different from "../components/about/Different";
import Value from "../components/about/Value";
import Client from "../components/about/Client";
import TrainerAbout from "../components/about/Trainer-about";
import Registration from "../components/Registration";
import Modal from "../components/Modal";
import Picture from "../components/about/Picture";
import ModalPicture from "../components/about/Modal-picture";

export default function About() {
  return (
    <div>
      <Layout>
        <BannerAbout />
        <Highlight />
        <AboutUs />
        <Different />
        <Value />
        <Client />
        <TrainerAbout />
        <Registration />
        <Modal />
        <Picture />
        <ModalPicture />
      </Layout>
    </div>
  );
}
